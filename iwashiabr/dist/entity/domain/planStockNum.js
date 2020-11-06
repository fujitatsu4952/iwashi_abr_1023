"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanStockNum = void 0;
const repository_1 = require("../../repository");
class PlanStockNum {
    constructor() {
        // ここでplanStatusRepositoryをインスタンス化
        this.planStatusRepository = new repository_1.planStatusRepository();
        this.planInteractor = new repository_1.planMastRepository();
    }
    async PlanStockNum(dateTimeRange, planID) {
        let stockNumList = [];
        let planMastStockNum = 0;
        const planMastStockNumTemp = (await this.planInteractor.fetchPlanMasts(planID));
        if (planMastStockNumTemp) {
            planMastStockNum = planMastStockNumTemp[0].stockNum;
        }
        for (let i = 0; i < dateTimeRange.length; i++) {
            const tempStockNum = (await this.planStatusRepository.fetchPlanStatus(dateTimeRange[i], planID));
            console.log(planID, tempStockNum);
            // もし該当時間に売れていた記録があればいったん保持する
            if (tempStockNum && tempStockNum.soldNum) {
                stockNumList.push(tempStockNum.soldNum);
            }
        }
        //もしデータ構造がまだ作られていなかったら = まだ一つも予約されていなかったら
        if (stockNumList.length < 1) {
            console.log("もしデータ構造がまだ作られていなかったら = まだ一つも予約されていなかったら");
            console.log(planID);
            console.log(stockNumList);
            console.log(planMastStockNum);
            return planMastStockNum;
        }
        else { //プラン構造が作られているもの
            const maxSoldNum = Math.max.apply(null, stockNumList);
            console.log("プラン構造が作られているもの");
            console.log(maxSoldNum);
            console.log(planMastStockNum);
            return (planMastStockNum - maxSoldNum);
        }
    }
}
exports.PlanStockNum = PlanStockNum;
