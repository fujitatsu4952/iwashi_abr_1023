"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestPlanStatusInteractor = void 0;
const repository_1 = require("../../../repository");
class GuestPlanStatusInteractor {
    constructor() {
        // ここでplanStatusRepositoryをインスタンス化
        this.planStatusRepository = new repository_1.planStatusRepository();
    }
    async updateStatus(planStatus) {
        await this.planStatusRepository.updatePlanStatus(planStatus);
    }
    async fetchStatus(Time, planID) {
        return await this.planStatusRepository.fetchPlanStatus(Time, planID);
    }
}
exports.GuestPlanStatusInteractor = GuestPlanStatusInteractor;
