import { PlanMast, PlanMastInput, Scalars } from "../index";
import { request, GraphQLClient, gql } from "graphql-request";
import { getSdk } from "./mutations";

const graphqlClient = new GraphQLClient(`http://localhost:8080`);
const sdk = getSdk(graphqlClient);

export class planMastRepository {
  async updatePlan(planMast: PlanMast | null) {
    await sdk.updatePlanMast({ planMast });
  }

  async addPlan(planMast: PlanMast | null) {
    await sdk.addPlanMast({ planMast });
  }

  // 他の処理も追加可能
  async fetchPlanMasts(planID: string | null | undefined) {
    const res = await sdk.fetchPlanMasts({ planID });
    return res.data?.fetchPlanMasts;
  }
};
