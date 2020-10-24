import { IGuestImageUsecase } from "../usecase/imageUsecase";
export declare class GuestImageInteractor implements IGuestImageUsecase {
    private imageMastRepository;
    fetchPlanMasts(keyName: string | null | undefined): Promise<any>;
}
