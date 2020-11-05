"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestRoomStatusInteractor = void 0;
const repository_1 = require("../../../repository");
class GuestRoomStatusInteractor {
    constructor() {
        // ここでplanStatusRepositoryをインスタンス化
        this.roomStatusRepository = new repository_1.roomStatusRepository();
        this.roomMastRepository = new repository_1.roomMastRepository();
    }
    async updateStatus(roomStatus) {
        await this.roomStatusRepository.updateRoomStatus(roomStatus);
    }
    async fetchStatus(Time, roomID) {
        const tempStockNum = await (this.roomStatusRepository.fetchRoomStatus(Time, roomID));
        return tempStockNum || undefined;
        // if(!tempStockNum) {
        //     return (await this.roomMastRepository.fetchRoomMasts(roomID)).data?.fetchRoomMasts[0].stockNum
        // } else {
        //     return 0
        // }
    }
}
exports.GuestRoomStatusInteractor = GuestRoomStatusInteractor;
