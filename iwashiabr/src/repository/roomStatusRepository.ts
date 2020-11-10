import { RoomStatus } from "../index";
import { request, GraphQLClient, gql } from "graphql-request";
import { getSdk } from "./mutations";


const graphqlClient = new GraphQLClient(`https://tomodachi.fujii-tatsuya-199807.com`);
const sdk = getSdk(graphqlClient);

export class roomStatusRepository {
  async updateRoomStatus(roomStatus: RoomStatus[] | null) {
    await sdk.updateRoomStatus({ roomStatus });
  }

  async addRoomStatus(roomStatus: RoomStatus[] | null) {
    await sdk.addRoomStatus({ roomStatus });
  }

  async fetchRoomStatus(Time: string, roomID: string): Promise<RoomStatus | null> {
    const res = (await sdk.fetchRoomStatus({ Time, roomID })).data
    if(res && res.fetchRoomStatus) {
      return res.fetchRoomStatus[0]
    } else {
      return null
    }
  }
};