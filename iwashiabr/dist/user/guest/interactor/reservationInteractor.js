"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestReservationInteractor = void 0;
const repository_1 = require("../../../repository");
const generateUuid_1 = require("../../../util/generateUuid");
class GuestReservationInteractor {
    constructor() {
        // ここでplanMastをインスタンス化
        this.reservationRepository = new repository_1.reservationRepository();
    }
    addObserver(cb) {
        this.observer.add(cb);
    }
    removeObserver(cb) {
        this.observer.delete(cb);
    }
    async getBlanc() {
        const reservationID = generateUuid_1.getUniqueID.getUniqueID(3);
        return {
            reservationID,
            checkInTime: '',
            checkOutTime: '',
            planID: '',
            roomID: '',
            roomNum: 0,
            planNum: 0,
            peopleNum: 0,
            policyID: '',
            totalPrice: 0,
            guestName: null,
            guestEmail: null,
            GuestTell: null,
            canceledAt: null
        };
    }
    async addMast(reservationObject) {
        return await this.reservationRepository.addReservation(reservationObject);
    }
    ;
    async updateMast(reservationObject) {
        return await this.reservationRepository.updateReservation(reservationObject);
    }
    ;
    async fetchReservationObjects(reservationID) {
        return await this.reservationRepository.fetchReservationObjects(reservationID);
    }
}
exports.GuestReservationInteractor = GuestReservationInteractor;
