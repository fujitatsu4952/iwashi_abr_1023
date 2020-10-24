import { PolicyMast, Scalars } from '../../../entity';
export interface IHostPolicyUsecase {
    updateMast(policyMast: PolicyMast): Promise<any>;
    fetchPolicyMast(policyID: Scalars['ID'] | undefined): Promise<any | undefined>;
}
