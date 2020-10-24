import {IGuestPolicyUsecase} from "../usecase/policyUsecase";
import {
    PolicyMast
} from '../../../entity/type'
import {policyMastRepository} from "../../../repository"


export class GuestPolicyInteractor implements IGuestPolicyUsecase {
    // ここでpolicyMastをインスタンス化
    private policyMastRepository = new policyMastRepository()

    public async updateMast(policyMast: PolicyMast): Promise<any> {
        return await this.policyMastRepository.updatePolicy(policyMast)
    }

    public async fetchPolicyMast(policyID: string | undefined): Promise<any> {
        return (await this.policyMastRepository.fetchPolicyMast('174da08566682'))
    }
   
}