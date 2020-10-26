"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestReservationCoordinatorInteractor = void 0;
class GuestReservationCoordinatorInteractor {
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
