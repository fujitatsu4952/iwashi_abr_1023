import { IHostRoomUsecase } from "../usecase/roomUsecase";
import { RoomMast } from '../../../entity/type';
export declare class HostRoomInteractor implements IHostRoomUsecase {
    private roomMastRepository;
    getBlancMast(): Promise<RoomMast>;
    addMast(roomMast: RoomMast): Promise<any>;
    updateMast(roomMast: RoomMast): Promise<any>;
    fetchRoomMasts(roomID: string | undefined): Promise<any>;
}
