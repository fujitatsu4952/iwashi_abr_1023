import { IGuestPlanStatusUsecase } from "../usecase/planStatusUsecase";
import { PlanStatus } from '../../../entity/type';
export declare class GuestPlanStatusInteractor implements IGuestPlanStatusUsecase {
    private planStatusRepository;
    updateStatus(planStatus: PlanStatus[]): Promise<void>;
    fetchStatus(Time: string, planID: string): Promise<any | null | undefined>;
}
