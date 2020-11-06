import { PlanStatus, Scalars } from '../../../entity';
export interface IGuestPlanStatusUsecase {
    updateStatus(planStatus: PlanStatus[]): Promise<void>;
    fetchStatus(Time: Scalars['AWSDate'], planID: Scalars['ID']): Promise<PlanStatus | null>;
    fetchStatusWithinRange(dateTimeRange: Scalars["AWSDate"][], planID: string): Promise<number>;
}
