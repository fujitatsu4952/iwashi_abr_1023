import { RoomMast, Scalars } from '../../../entity';
import { RoomStatus } from '../../../entity/type';
export interface IGuestRoomUsecase {
    getBlancMast(): Promise<RoomMast>;
    addMast(roomMast: RoomMast | null): Promise<any>;
    updateMast(roomMast: RoomMast | null): Promise<any>;
    fetchRoomMasts(roomID: Scalars['ID'] | undefined | null): Promise<RoomStatus | undefined>;
}
