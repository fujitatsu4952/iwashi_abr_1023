import { RoomMast } from "../index";
import { GraphQLClient } from "graphql-request";
import { getSdk } from "./mutations";

const graphqlClient = new GraphQLClient(`http://localhost:8080`);
const sdk = getSdk(graphqlClient);

export class roomMastRepository {
  async updateRoom(roomMast: RoomMast | null) {
    await sdk.updateRoomMast({ roomMast });
  }

  async addRoom(roomMast: RoomMast | null) {
    await sdk.addRoomMast({ roomMast });
  }

  // 他の処理も追加可能
  async fetchRoomMasts(roomID: string | null | undefined) {
    const res = await sdk.fetchRoomMasts({ roomID });
    return res.data?.fetchRoomMasts;
  }
};
