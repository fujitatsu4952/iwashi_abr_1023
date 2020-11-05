import { RoomStatus, Scalars } from '../../../entity';
export interface IGuestRoomStatusUsecase {
    updateStatus(roomStatus: RoomStatus[]): Promise<void>;
    fetchStatus(Time: Scalars['AWSDate'], roomID: Scalars['ID']): Promise<any | null | undefined>;
}
