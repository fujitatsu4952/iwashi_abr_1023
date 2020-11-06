import {IGuestPlanStatusUsecase} from "../usecase/planStatusUsecase";
import { PlanStatus } from '../../../entity/type'
import { planStatusRepository } from "../../../repository"
import { planStockNum } from "../../../index";


export class GuestPlanStatusInteractor implements IGuestPlanStatusUsecase {

    // ここでplanStatusRepositoryをインスタンス化
    private planStatusRepository = new planStatusRepository()
    private planSotckNumCalc = new planStockNum();

    public async updateStatus(planStatus: PlanStatus[]): Promise<void> {
        await this.planStatusRepository.updatePlanStatus(planStatus);
    }
    public async fetchStatus(time: string, planID: string): Promise<number> {
        return await this.planSotckNumCalc.planStockNumSingle(time, planID)
    }
    public async fetchStatusWithinRange(dateTimeRange: string[], planID: string): Promise<number> {
        return await this.planSotckNumCalc.planStockNum(dateTimeRange, planID)
    }
}