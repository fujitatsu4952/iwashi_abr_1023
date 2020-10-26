export declare class GuestReservationCoordinatorInteractor {
    private observer;
    addObserver(cb: () => void): void;
    removeObserver(cb: () => void): void;
    updateReservation(): Promise<void>;
}
