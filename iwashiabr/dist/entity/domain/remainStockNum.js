"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemainStock = void 0;
const repository_1 = require("../../repository");
class RemainStock {
    constructor() {
        // ここでplanStatusRepositoryをインスタンス化
        this.planStatusRepository = new repository_1.planStatusRepository();
    }
    async fetchStatus(Time, planID) {
        const dailyData = (await this.planStatusRepository.fetchPlanStatus(Time, planID)).data?.fetchPlanStatus;
        // もしデイリーデータが存在していなかったら
        if (!dailyData) {
            return 0; //ここは後で書き換える
        }
        else {
            console.log(dailyData);
            return 100;
        }
    }
}
exports.RemainStock = RemainStock;
