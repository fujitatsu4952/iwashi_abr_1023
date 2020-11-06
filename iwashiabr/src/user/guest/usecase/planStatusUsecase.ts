import { PlanStatus, Scalars } from '../../../entity';

export interface IGuestPlanStatusUsecase {
    // 作ったものを更新
    updateStatus(planStatus: PlanStatus[]): Promise<void>;
    // 在庫情報を取得
    fetchStatus(Time: Scalars['AWSDate'], planID: Scalars['ID']): Promise< PlanStatus | null>;
    // 該当期間内での提供可能数を取得
    fetchStatusWithinRange(dateTimeRange: Scalars["AWSDate"][], planID: string): Promise<number>;

}
