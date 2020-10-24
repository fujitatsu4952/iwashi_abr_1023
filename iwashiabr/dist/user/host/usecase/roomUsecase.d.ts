import { RoomMast, Scalars } from '../../../entity';
export interface IHostRoomUsecase {
    getBlancMast(): Promise<RoomMast>;
    addMast(roomMast: RoomMast): Promise<any>;
    updateMast(roomMast: RoomMast): Promise<any>;
    fetchRoomMasts(roomID: Scalars['ID'] | undefined): Promise<any | undefined>;
}
