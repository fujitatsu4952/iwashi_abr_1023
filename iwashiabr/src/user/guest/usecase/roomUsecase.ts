import { RoomMast, Scalars } from '../../../entity';
import {
     RoomStatus
} from '../../../entity/type'
export interface IGuestRoomUsecase {
    // 新しいプランフォーム作成
    getBlancMast(): Promise<RoomMast>;
    // 新しく作ったものを送信
    addMast(roomMast: RoomMast | null): Promise<any>;
    // 作ったものを更新
    updateMast(roomMast: RoomMast | null): Promise<any>;
    // これまでのプラン一覧を取得
    fetchRoomMasts(roomID: Scalars['ID'] | undefined | null): Promise<RoomStatus | undefined>;
}
