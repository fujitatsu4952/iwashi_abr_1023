import { IGuestPlanUsecase } from "../usecase/planUsecase";
import { PlanMast } from '../../../entity/type';
export declare class GuestPlanInteractor implements IGuestPlanUsecase {
    private planMastRepository;
    getBlancMast(): Promise<PlanMast>;
    addMast(planMast: PlanMast | null): Promise<any>;
    updateMast(planMast: PlanMast | null): Promise<any>;
    fetchPlanMasts(planID: string | undefined): Promise<any>;
}
