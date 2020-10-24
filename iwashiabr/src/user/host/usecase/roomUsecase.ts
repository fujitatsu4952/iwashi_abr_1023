import { RoomMast, Scalars } from '../../../entity';

export interface IGuestRoomUsecase {
    // 新しいプランフォーム作成
    getBlancMast(): Promise<RoomMast>;
    // 新しく作ったものを送信
    addMast(roomMast: RoomMast): Promise<any>;
    // 作ったものを更新
    updateMast(roomMast: RoomMast): Promise<any>;
    // これまでのプラン一覧を取得
    fetchRoomMasts(roomID: Scalars['ID'] | undefined): Promise<any | undefined>;
}
