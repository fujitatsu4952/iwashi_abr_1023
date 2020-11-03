import {
    PlanMast, PlanStatus
} from '../../entity/type'
import {planStatusRepository} from "../../repository"


export class RemainStock {
    // ここでplanStatusRepositoryをインスタンス化
    private planStatusRepository = new planStatusRepository()

    public async fetchStatus(Time: string, planID: string): Promise<number> {
        const dailyData = (await this.planStatusRepository.fetchPlanStatus(Time, planID)).data?.fetchPlanStatus;
        // もしデイリーデータが存在していなかったら
        if(!dailyData) {
            return 0 //ここは後で書き換える
        } else {
            console.log(dailyData)
            return 100
        }
    }
}