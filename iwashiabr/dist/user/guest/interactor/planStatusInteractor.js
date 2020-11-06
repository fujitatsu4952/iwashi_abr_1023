"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestPlanStatusInteractor = void 0;
const repository_1 = require("../../../repository");
const index_1 = require("../../../index");
class GuestPlanStatusInteractor {
    constructor() {
        // ここでplanStatusRepositoryをインスタンス化
        this.planStatusRepository = new repository_1.planStatusRepository();
        this.planSotckNumCalc = new index_1.PlanStockNum();
    }
    async updateStatus(planStatus) {
        await this.planStatusRepository.updatePlanStatus(planStatus);
    }
    async fetchStatus(Time, planID) {
        return await this.planStatusRepository.fetchPlanStatus(Time, planID);
    }
    async fetchStatusWithinRange(dateTimeRange, planID) {
        return this.planSotckNumCalc.PlanStockNum(dateTimeRange, planID);
    }
}
exports.GuestPlanStatusInteractor = GuestPlanStatusInteractor;
