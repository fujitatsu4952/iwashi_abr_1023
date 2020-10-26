import { Observer } from '../../../index';


export class GuestReservationCoordinatorInteractor {
    private observer!: Observer;

    public async start() {
        this.observer = new Observer();
    }

    public addObserver(cb: () => void): void {
        this.observer.add(cb);
    }
    public removeObserver(cb: () => void): void {
        this.observer.delete(cb);
    }
    public async  updateReservation(): Promise<void> {
        this.observer.emit();
        return;
    }
}