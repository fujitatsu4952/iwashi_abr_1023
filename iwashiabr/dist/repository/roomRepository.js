"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomMastRepository = void 0;
const graphql_request_1 = require("graphql-request");
const mutations_1 = require("./mutations");
const graphqlClient = new graphql_request_1.GraphQLClient(`http://localhost:8080`);
const sdk = mutations_1.getSdk(graphqlClient);
class roomMastRepository {
    async updateRoom(roomMast) {
        await sdk.updateRoomMast({ roomMast });
    }
    async addRoom(roomMast) {
        await sdk.addRoomMast({ roomMast });
    }
    // 他の処理も追加可能
    async fetchRoomMasts(roomID) {
        const res = await sdk.fetchRoomMasts({ roomID });
        return res.data?.fetchRoomMasts;
    }
}
exports.roomMastRepository = roomMastRepository;
;
