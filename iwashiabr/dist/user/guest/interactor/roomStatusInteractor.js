"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestRoomStatusInteractor = void 0;
const repository_1 = require("../../../repository");
class GuestRoomStatusInteractor {
    constructor() {
        // ここでplanStatusRepositoryをインスタンス化
        this.roomStatusRepository = new repository_1.roomStatusRepository();
    }
    async updateStatus(roomStatus) {
        await this.roomStatusRepository.updateRoomStatus(roomStatus);
    }
    async fetchStatus(Time, roomID) {
        return await (this.roomStatusRepository.fetchRoomStatus(Time, roomID));
    }
}
exports.GuestRoomStatusInteractor = GuestRoomStatusInteractor;
