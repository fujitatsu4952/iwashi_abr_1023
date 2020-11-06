import { IGuestPlanStatusUsecase } from "../usecase/planStatusUsecase";
import { ReservationObject } from '../../../entity/type';
export declare class GuestPlanStatusInteractor implements IGuestPlanStatusUsecase {
    private planStatusRepository;
    private planSotckNumCalc;
    updateStatus(resevationObject: ReservationObject): Promise<void>;
    fetchStatus(time: string, planID: string): Promise<number>;
    fetchStatusWithinRange(dateTimeRange: string[], planID: string): Promise<number>;
}
