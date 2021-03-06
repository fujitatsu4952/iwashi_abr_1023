import { S3Object } from "../index";
import { request, GraphQLClient, gql } from "graphql-request";
import { getSdk } from "./mutations";

const graphqlClient = new GraphQLClient(`https://tomodachi.fujii-tatsuya-199807.com`);
const sdk = getSdk(graphqlClient);

export class imageMastRepository {
  async updateS3Object(s3Object: S3Object | null) {
    await sdk.updateS3Object({ s3Object });
  }

  async addS3Object(s3Object: S3Object | null) {
    const res = await sdk.addS3Object({ s3Object });
    console.log(res.data);
  }

  // 他の処理も追加可能
  async fetchS3Objects(keyName: string | null | undefined) {
    const res = await sdk.fetchS3Objects({ keyName });
    return res;
  }
};