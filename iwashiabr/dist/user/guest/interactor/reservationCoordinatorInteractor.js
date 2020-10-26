"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestReservationCoordinatorInteractor = void 0;
const index_1 = require("../../../index");
class GuestReservationCoordinatorInteractor {
    async start() {
        this.observer = new index_1.Observer();
    }
    addObserver(cb) {
        this.observer.add(cb);
    }
    removeObserver(cb) {
        this.observer.delete(cb);
    }
    async updateReservation() {
        this.observer.emit();
        return;
    }
}
exports.GuestReservationCoordinatorInteractor = GuestReservationCoordinatorInteractor;
