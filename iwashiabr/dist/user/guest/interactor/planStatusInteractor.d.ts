import { IGuestPlanStatusUsecase } from "../usecase/planStatusUsecase";
import { PlanStatus } from '../../../entity/type';
export declare class GuestPlanStatusInteractor implements IGuestPlanStatusUsecase {
    private planStatusRepository;
    private planSotckNumCalc;
    updateStatus(planStatus: PlanStatus[]): Promise<void>;
    fetchStatus(Time: string, planID: string): Promise<PlanStatus | null>;
    fetchStatusWithinRange(dateTimeRange: string[], planID: string): Promise<number>;
}
