import { PlanStatus, Scalars } from '../../../entity';
export interface IGuestPlanStatusUsecase {
    updateStatus(planStatus: PlanStatus[]): Promise<void>;
    fetchStatus(time: Scalars['AWSDate'], planID: Scalars['ID']): Promise<number>;
    fetchStatusWithinRange(dateTimeRange: Scalars["AWSDate"][], planID: string): Promise<number>;
}
