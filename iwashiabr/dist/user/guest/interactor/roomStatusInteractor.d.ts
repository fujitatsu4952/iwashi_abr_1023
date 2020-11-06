import { IGuestRoomStatusUsecase } from "../usecase/roomStatusUsecase";
import { RoomStatus } from '../../../entity/type';
export declare class GuestRoomStatusInteractor implements IGuestRoomStatusUsecase {
    private roomStatusRepository;
    private roomSotckNumCalc;
    updateStatus(roomStatus: RoomStatus[]): Promise<void>;
    fetchStatus(time: string, roomID: string): Promise<number>;
    fetchStatusWithinRange(dateTimeRange: string[], roomID: string): Promise<number>;
}
