import {IGuestPlanStatusUsecase} from "../usecase/planStatusUsecase";
import {
    PlanMast, PlanStatus
} from '../../../entity/type'
import {planStatusRepository} from "../../../repository"
import { getUniqueID } from "../../../util/generateUuid";


export class GuestPlanStatusInteractor implements IGuestPlanStatusUsecase {
    // ここでplanStatusRepositoryをインスタンス化
    private planStatusRepository = new planStatusRepository()
    
    public async updateStatus(planStatus: PlanStatus[]): Promise<void> {
        await this.planStatusRepository.updatePlanStatus(planStatus);
    }
    public async fetchStatus(Time: string, planID: string): Promise<any | null | undefined> {
        return await this.planStatusRepository.fetchPlanStatus(Time, planID);

        // return await this.planStatusRepository.fetchPlanStatus(Time, planID);
    }
}