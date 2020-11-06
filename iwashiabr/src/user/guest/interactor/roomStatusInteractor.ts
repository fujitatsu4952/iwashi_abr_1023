import {IGuestRoomStatusUsecase} from "../usecase/roomStatusUsecase";
import {
    PlanMast, RoomStatus
} from '../../../entity/type'
import {roomStatusRepository, roomMastRepository} from "../../../repository"
import { getUniqueID } from "../../../util/generateUuid";


export class GuestRoomStatusInteractor implements IGuestRoomStatusUsecase {
    // ここでplanStatusRepositoryをインスタンス化
    private roomStatusRepository = new roomStatusRepository()
    private roomMastRepository = new roomMastRepository()
    
    public async updateStatus(roomStatus: RoomStatus[]): Promise<void> {
        await this.roomStatusRepository.updateRoomStatus(roomStatus);
    }
    public async fetchStatus(Time: string, roomID: string): Promise<RoomStatus | null> {
        const tempStockNum = await (this.roomStatusRepository.fetchRoomStatus(Time, roomID));
        return tempStockNum || null;
    }
}