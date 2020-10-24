import { S3Object } from '../../../entity';
export interface IHostImageUsecase {
    addMast(s3Object: S3Object | null): Promise<any>;
    updateMast(s3Object: S3Object | null): Promise<any>;
    fetchPlanMasts(keyName: string | null | undefined): Promise<any | undefined>;
}
