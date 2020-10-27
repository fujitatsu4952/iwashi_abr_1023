"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestReservationCoordinatorInteractor = void 0;
const index_1 = require("../../../index");
const reservationInteractor_1 = require("./reservationInteractor");
class GuestReservationCoordinatorInteractor {
    constructor() {
        this.reservationObject = null;
        this.reservationInteractor = new reservationInteractor_1.GuestReservationInteractor();
    }
    async start() {
        this.observer = new index_1.Observer();
    }
    get getReservationObject() {
        return this.reservationObject;
    }
    addObserver(cb) {
        this.observer.add(cb);
    }
    removeObserver(cb) {
        this.observer.delete(cb);
    }
    // storeを更新する
    async updateReservation(reservationObject) {
        this.reservationObject = reservationObject;
        this.observer.emit();
    }
    // storeを更新する
    async updateReservationPlan(planID) {
        if (this.reservationObject) {
            console.log("多分呼ばれてない");
            this.reservationObject.planID = planID;
        }
        this.observer.emit();
    }
    // storeを更新する
    async updateReservationRoom(roomID) {
        if (this.reservationObject) {
            console.log("多分呼ばれてないroom");
            this.reservationObject.roomID = roomID;
        }
        this.observer.emit();
    }
}
exports.GuestReservationCoordinatorInteractor = GuestReservationCoordinatorInteractor;
