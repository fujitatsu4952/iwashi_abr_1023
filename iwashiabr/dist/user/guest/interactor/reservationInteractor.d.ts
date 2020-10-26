import { IGuestReservationUsecase } from "../usecase/reservationUsecase";
import { ReservationObject } from '../../../entity/type';
export declare class GuestReservationInteractor implements IGuestReservationUsecase {
    private observer;
    addObserver(cb: () => void): void;
    removeObserver(cb: () => void): void;
    private reservationRepository;
    getBlanc(): Promise<ReservationObject>;
    addMast(reservationObject: ReservationObject | null): Promise<any>;
    updateMast(reservationObject: ReservationObject | null): Promise<any>;
    fetchReservationObjects(reservationID: string | undefined | null): Promise<any>;
}
