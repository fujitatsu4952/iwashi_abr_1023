import { PolicyMast, Scalars } from '../../../entity';

export interface IHostPolicyUsecase {
    // 作ったものを更新
    updateMast(policyMast: PolicyMast): Promise<any>;
    // これまでのプラン一覧を取得
    fetchPolicyMast(policyID: Scalars['ID'] | undefined): Promise<any | undefined>;
}
