"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestPlanStatusInteractor = void 0;
const repository_1 = require("../../../repository");
const index_1 = require("../../../index");
class GuestPlanStatusInteractor {
    constructor() {
        // ここでplanStatusRepositoryをインスタンス化
        this.planStatusRepository = new repository_1.planStatusRepository();
        this.planSotckNumCalc = new index_1.planStockNum();
    }
    async updateStatus(resevationObject) {
        await this.planSotckNumCalc.planStockUpdate(resevationObject);
    }
    async fetchStatus(time, planID) {
        return await this.planSotckNumCalc.planStockNumSingle(time, planID);
    }
    async fetchStatusWithinRange(dateTimeRange, planID) {
        return await this.planSotckNumCalc.planStockNum(dateTimeRange, planID);
    }
}
exports.GuestPlanStatusInteractor = GuestPlanStatusInteractor;
