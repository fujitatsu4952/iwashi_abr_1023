import {IGuestReservationUsecase} from "../usecase/reservationUsecase";
import {
    ReservationObject
} from '../../../entity/type'
import {reservationRepository} from "../../../repository"
import { getUniqueID } from "../../../util/generateUuid";
import { Observer } from '../../../index';

export class GuestReservationInteractor implements IGuestReservationUsecase {
    private observer!: Observer;
    public addObserver(cb: () => void): void {
        this.observer.add(cb);
    }
    public removeObserver(cb: () => void): void {
        this.observer.delete(cb);
    }

    // ここでplanMastをインスタンス化
    private reservationRepository = new reservationRepository()
    public async getBlanc(): Promise<ReservationObject> {
        const reservationID: string = getUniqueID.getUniqueID(3);
        return {
            reservationID,
            checkInTime: '',
            checkOutTime: '',
            planID: '',
            roomID: '',
            roomNum: 0,
            planNum: 0,
            peopleNum: 0,
            policyID: '174da08566682',
            totalPrice: 0,
            guestName: null,
            guestEmail: null,
            GuestTell: null,
            canceledAt: null
        };
    }
    public async addMast(reservationObject: ReservationObject | null): Promise<any> {
        return await this.reservationRepository.addReservation(reservationObject)
    };
    public async updateMast(reservationObject: ReservationObject | null): Promise<any> {
        return await this.reservationRepository.updateReservation(reservationObject)
    };
    public async fetchReservationObjects(reservationID: string | undefined | null): Promise<any> {
        return await this.reservationRepository.fetchReservationObjects(reservationID)
    }
}