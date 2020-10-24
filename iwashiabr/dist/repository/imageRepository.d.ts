import { S3Object } from "../index";
export declare class imageMastRepository {
    updateS3Object(s3Object: S3Object | null): Promise<void>;
    addS3Object(s3Object: S3Object | null): Promise<void>;
    fetchS3Objects(keyName: string | null | undefined): Promise<({
        __typename?: "S3Object" | undefined;
    } & Pick<import("./mutations").S3Object, "keyName" | "bucket" | "region" | "mimeType" | "fileName">)[] | undefined>;
}
