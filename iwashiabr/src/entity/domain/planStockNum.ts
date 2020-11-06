import {
    PlanMast, PlanStatus, Scalars
} from '../../entity'
import { planMastRepository, planStatusRepository} from "../../repository"
import {getTimeRangeArray} from '../../common/util/dateUtil'


export class PlanStockNum {
    // ここでplanStatusRepositoryをインスタンス化
    private planStatusRepository = new planStatusRepository()
    private planInteractor = new planMastRepository();

    private stockNumList: number[]=[]
    public async PlanStockNum(dateTimeRange: Scalars["AWSDate"][], planID: string): Promise<number> {

        const planMastStockNum = (await this.planInteractor.fetchPlanMasts(planID))![0].stockNum

        for (let i = 0; i < dateTimeRange.length; i++) {
            const tempStockNum  = (await this.planStatusRepository.fetchPlanStatus(dateTimeRange[i], planID));
            // もし該当時間に売れていた記録があればいったん保持する
            if (tempStockNum && tempStockNum.soldNum) {
                this.stockNumList.push(tempStockNum.soldNum);
            }
        }
        //もしデータ構造がまだ作られていなかったら = まだ一つも予約されていなかったら
        if (this.stockNumList.length < 1) {
            return planMastStockNum;
        } else {
            const maxSoldNum = Math.max.apply(null, this.stockNumList);
            return (planMastStockNum - maxSoldNum);
        }
    }
}