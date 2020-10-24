import { PlanMast } from "../index";
export declare class planMastRepository {
    updatePlan(planMast: PlanMast | null): Promise<void>;
    addPlan(planMast: PlanMast | null): Promise<void>;
    fetchPlanMasts(planID: string | null | undefined): Promise<({
        __typename?: "PlanMast" | undefined;
    } & Pick<import("./mutations").PlanMast, "description" | "planID" | "name" | "subDescription" | "price" | "stockNum" | "deletedAt" | "inSale">)[] | undefined>;
}
