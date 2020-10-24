import { IGuestPolicyUsecase } from "../usecase/policyUsecase";
import { PolicyMast } from '../../../entity/type';
export declare class GuestPolicyInteractor implements IGuestPolicyUsecase {
    private policyMastRepository;
    updateMast(policyMast: PolicyMast): Promise<any>;
    fetchPolicyMast(policyID: string | undefined): Promise<any>;
}
