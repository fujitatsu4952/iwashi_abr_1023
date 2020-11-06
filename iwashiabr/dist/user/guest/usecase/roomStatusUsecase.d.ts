import { RoomStatus, Scalars } from '../../../entity';
export interface IGuestRoomStatusUsecase {
    updateStatus(roomStatus: RoomStatus[]): Promise<void>;
    fetchStatus(time: Scalars['AWSDate'], roomID: Scalars['ID']): Promise<number>;
    fetchStatusWithinRange(dateTimeRange: Scalars['AWSDate'][], roomID: Scalars['ID']): Promise<number>;
}
