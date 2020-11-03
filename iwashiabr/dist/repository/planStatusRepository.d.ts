import { PlanStatus } from "../index";
export declare class planStatusRepository {
    updatePlanStatus(planStatus: PlanStatus[] | null): Promise<void>;
    addPlanStatus(planStatus: PlanStatus[] | null): Promise<void>;
    fetchPlanStatus(Time: string, planID: string): Promise<{
        data?: import("./mutations").FetchPlanStatusQuery | undefined;
        extensions?: any;
        headers: import("graphql-request/dist/types.dom").Headers;
        status: number;
        errors?: import("graphql-request/dist/types").GraphQLError[] | undefined;
    }>;
}
