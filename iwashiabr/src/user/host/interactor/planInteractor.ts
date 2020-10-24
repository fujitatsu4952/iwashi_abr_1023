import {IGuestPlanUsecase} from "../usecase/planUsecase";
import {
    PlanMast
} from '../../../entity/type'
import {planMastRepository} from "../../../repository"
import { getUniqueID } from "../../../util/generateUuid";


export class GuestPlanInteractor implements IGuestPlanUsecase {
    // ここでplanMastをインスタンス化
    private planMastRepository = new planMastRepository()
    public async getBlancMast(): Promise<PlanMast> {
        const planID: string = getUniqueID.getUniqueID(3);
        return {
            planID,
            name: "",
            description: "",
            subDescription: "",
            price: 0,
            stockNum: 0,
            deletedAt: undefined,
            inSale: undefined
        };
    }
    public async addMast(planMast: PlanMast): Promise<any> {
        return await this.planMastRepository.addPlan(planMast)
    }
    public async updateMast(planMast: PlanMast): Promise<any> {
        return await this.planMastRepository.updatePlan(planMast)
    }
    public async fetchPlanMasts(planID: string | undefined): Promise<any> {
        return await this.planMastRepository.fetchPlanMasts(planID)
    }
}