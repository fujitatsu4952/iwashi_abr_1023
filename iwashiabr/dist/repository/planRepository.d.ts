import { PlanMast } from "../index";
export declare class planMastRepository {
    updatePlan(planMast: PlanMast | null): Promise<void>;
    addPlan(planMast: PlanMast | null): Promise<void>;
    fetchPlanMasts(planID: string | null | undefined): Promise<{
        data?: import("./mutations").FetchPlanMastsQuery | undefined;
        extensions?: any;
        headers: import("graphql-request/dist/types.dom").Headers;
        status: number;
        errors?: import("graphql-request/dist/types").GraphQLError[] | undefined;
    }>;
}
