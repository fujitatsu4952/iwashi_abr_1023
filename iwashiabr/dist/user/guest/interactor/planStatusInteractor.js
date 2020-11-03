"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestPlanStatusInteractor = void 0;
const repository_1 = require("../../../repository");
const index_1 = require("../../../index");
class GuestPlanStatusInteractor {
    constructor() {
        // ここでplanStatusRepositoryをインスタンス化
        this.planStatusRepository = new repository_1.planStatusRepository();
        this.remainStockNum = new index_1.RemainStock();
    }
    async updateStatus(planStatus) {
        await this.planStatusRepository.updatePlanStatus(planStatus);
    }
    async fetchStatus(Time, planID) {
        console.log(await this.remainStockNum.fetchStatus(Time, planID));
        // return await this.planStatusRepository.fetchPlanStatus(Time, planID);
    }
}
exports.GuestPlanStatusInteractor = GuestPlanStatusInteractor;
