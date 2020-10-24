import { Scalars } from '../../../entity';
export interface IGuestPolicyUsecase {
    fetchPolicyMast(policyID: Scalars['ID'] | undefined): Promise<any | undefined>;
}
