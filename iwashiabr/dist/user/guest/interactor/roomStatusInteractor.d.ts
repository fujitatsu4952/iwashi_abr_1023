import { IGuestRoomStatusUsecase } from "../usecase/roomStatusUsecase";
import { RoomStatus } from '../../../entity/type';
export declare class GuestRoomStatusInteractor implements IGuestRoomStatusUsecase {
    private roomStatusRepository;
    private roomMastRepository;
    updateStatus(roomStatus: RoomStatus[]): Promise<void>;
    fetchStatus(Time: string, roomID: string): Promise<any | null | undefined>;
}
