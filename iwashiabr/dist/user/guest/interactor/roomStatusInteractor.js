"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestRoomStatusInteractor = void 0;
const repository_1 = require("../../../repository");
const index_1 = require("../../../index");
class GuestRoomStatusInteractor {
    constructor() {
        // ここでroomStatusRepositoryをインスタンス化
        this.roomStatusRepository = new repository_1.roomStatusRepository();
        // これはUtilをインスタンス化
        this.roomSotckNumCalc = new index_1.roomStockNum();
    }
    async updateStatus(resevationObject) {
        await this.roomSotckNumCalc.roomStockUpdate(resevationObject);
    }
    async fetchStatus(time, roomID) {
        return await this.roomSotckNumCalc.roomStockNumSingle(time, roomID);
    }
    async fetchStatusWithinRange(dateTimeRange, roomID) {
        return await this.roomSotckNumCalc.roomStockNum(dateTimeRange, roomID);
    }
}
exports.GuestRoomStatusInteractor = GuestRoomStatusInteractor;
