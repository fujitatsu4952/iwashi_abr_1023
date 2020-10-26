export declare class GuestReservationCoordinatorInteractor {
    private observer;
    start(): Promise<void>;
    addObserver(cb: () => void): void;
    removeObserver(cb: () => void): void;
    updateReservation(): Promise<void>;
}
