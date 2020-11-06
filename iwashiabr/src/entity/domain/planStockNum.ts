import {
    PlanMast, PlanStatus, Scalars
} from '../../entity'
import { planMastRepository, planStatusRepository} from "../../repository"
import {getTimeRangeArray} from '../../common/util/dateUtil'


export class PlanStockNum {
    // ここでplanStatusRepositoryをインスタンス化
    private planStatusRepository = new planStatusRepository()
    private planInteractor = new planMastRepository();

    public stockNumList: number[]=[]
    public planMastStockNum= 0
    public async PlanStockNum(dateTimeRange: Scalars["AWSDate"][], planID: string): Promise<number> {
        const planMastStockNumTemp = (await this.planInteractor.fetchPlanMasts(planID))
        if(planMastStockNumTemp) {
            this.planMastStockNum = planMastStockNumTemp[0].stockNum
        } 

        for (let i = 0; i < dateTimeRange.length; i++) {
            const tempStockNum  = (await this.planStatusRepository.fetchPlanStatus(dateTimeRange[i], planID));
            console.log(planID, tempStockNum)
            // もし該当時間に売れていた記録があればいったん保持する
            if (tempStockNum && tempStockNum.soldNum) {
                this.stockNumList.push(tempStockNum.soldNum);
            }
        }
        //もしデータ構造がまだ作られていなかったら = まだ一つも予約されていなかったら
        if (this.stockNumList.length < 1) {
            console.log("もしデータ構造がまだ作られていなかったら = まだ一つも予約されていなかったら")
            console.log(this.stockNumList)
            console.log(this.planMastStockNum)
            return this.planMastStockNum;
        } else { //プラン構造が作られているもの
            const maxSoldNum = Math.max.apply(null, this.stockNumList);
            console.log("プラン構造が作られているもの")
            console.log(maxSoldNum)
            console.log(this.planMastStockNum)
            return (this.planMastStockNum - maxSoldNum);
        }
    }
}