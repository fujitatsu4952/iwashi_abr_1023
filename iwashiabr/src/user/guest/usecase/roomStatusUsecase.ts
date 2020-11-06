import { RoomStatus, Scalars } from '../../../entity';

export interface IGuestRoomStatusUsecase {
    // 作ったものを更新
    updateStatus(roomStatus: RoomStatus[]): Promise<void>;
    // 在庫情報を取得
    fetchStatus(Time: Scalars['AWSDate'], roomID: Scalars['ID']): Promise<RoomStatus | null>;
}
