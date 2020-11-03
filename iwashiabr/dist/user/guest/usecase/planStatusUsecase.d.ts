import { PlanStatus, Scalars } from '../../../entity';
export interface IGuestPlanStatusUsecase {
    updateStatus(planStatus: PlanStatus[]): Promise<void>;
    fetchStatus(Time: Scalars['AWSDate'], planID: Scalars['ID']): Promise<any | null | undefined>;
}
