import { RoomStatus } from "../index";
import { request, GraphQLClient, gql } from "graphql-request";
import { getSdk } from "./mutations";

const graphqlClient = new GraphQLClient(`http://localhost:8080`);
const sdk = getSdk(graphqlClient);

export class roomStatusRepository {
  async updateRoomStatus(roomStatus: RoomStatus[] | null) {
    await sdk.updateRoomStatus({ roomStatus });
  }

  async addRoomStatus(roomStatus: RoomStatus[] | null) {
    await sdk.addRoomStatus({ roomStatus });
  }

  async fetchRoomStatus(Time: string, roomID: string) {
    const res = await (await sdk.fetchRoomStatus({ Time, roomID })).data;
    return res;
  }
};