import { PlanStatus } from "../index";
import { request, GraphQLClient, gql } from "graphql-request";
import { getSdk } from "./mutations";

const graphqlClient = new GraphQLClient(`http://localhost:8080`);
const sdk = getSdk(graphqlClient);

export class planStatusRepository {
  async updatePlanStatus(planStatus: PlanStatus[] | null) {
    await sdk.updatePlanStatus({ planStatus });
  }

  async addPlanStatus(planStatus: PlanStatus[] | null) {
    await sdk.addPlanStatus({ planStatus });
  }

  async fetchPlanStatus(Time: string, planID: string) {
    const res = await sdk.fetchPlanStatus({ Time, planID });
    return res;
  }
};
