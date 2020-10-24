import { PolicyMast, Scalars } from '../../../entity';
export interface IGuestPolicyUsecase {
    updateMast(policyMast: PolicyMast): Promise<any>;
    fetchPolicyMast(policyID: Scalars['ID'] | undefined): Promise<any | undefined>;
}
