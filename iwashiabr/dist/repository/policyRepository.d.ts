import { PolicyMast } from "../index";
export declare class policyMastRepository {
    updatePolicy(policyMast: PolicyMast | null): Promise<void>;
    addPolicy(policyMast: PolicyMast | null): Promise<void>;
    fetchPolicyMast(policyID: string | null | undefined): Promise<({
        __typename?: "PolicyMast" | undefined;
    } & Pick<import("./mutations").PolicyMast, "policyID" | "roomChargePrice">) | undefined>;
}
