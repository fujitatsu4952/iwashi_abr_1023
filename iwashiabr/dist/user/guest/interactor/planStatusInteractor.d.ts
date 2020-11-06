import { IGuestPlanStatusUsecase } from "../usecase/planStatusUsecase";
import { PlanStatus } from '../../../entity/type';
export declare class GuestPlanStatusInteractor implements IGuestPlanStatusUsecase {
    private planStatusRepository;
    private planSotckNumCalc;
    updateStatus(planStatus: PlanStatus[]): Promise<void>;
    fetchStatus(time: string, planID: string): Promise<number>;
    fetchStatusWithinRange(dateTimeRange: string[], planID: string): Promise<number>;
}
