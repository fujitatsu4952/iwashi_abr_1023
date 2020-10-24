import { IGuestPlanUsecase } from "../usecase/planUsecase";
import { PlanMast } from '../../../entity/type';
export declare class GuestPlanInteractor implements IGuestPlanUsecase {
    private planMastRepository;
    getBlancMast(): Promise<PlanMast>;
    addMast(planMast: PlanMast): Promise<any>;
    updateMast(planMast: PlanMast): Promise<any>;
    fetchPlanMasts(planID: string): Promise<any>;
}
