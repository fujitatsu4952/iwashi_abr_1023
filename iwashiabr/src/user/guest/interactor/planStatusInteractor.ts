import {IGuestPlanStatusUsecase} from "../usecase/planStatusUsecase";
import {
    PlanMast, PlanStatus
} from '../../../entity/type'
import {planStatusRepository} from "../../../repository"
import { PlanStockNum } from "../../../index";


export class GuestPlanStatusInteractor implements IGuestPlanStatusUsecase {

    // ここでplanStatusRepositoryをインスタンス化
    private planStatusRepository = new planStatusRepository()
    private planSotckNumCalc = new PlanStockNum();

    public async updateStatus(planStatus: PlanStatus[]): Promise<void> {
        await this.planStatusRepository.updatePlanStatus(planStatus);
    }
    public async fetchStatus(Time: string, planID: string): Promise< PlanStatus | null> {
        return await this.planStatusRepository.fetchPlanStatus(Time, planID);
    }
    public async fetchStatusWithinRange(dateTimeRange: string[], planID: string): Promise<number> {
        return this.planSotckNumCalc.PlanStockNum(dateTimeRange, planID)
    }
}