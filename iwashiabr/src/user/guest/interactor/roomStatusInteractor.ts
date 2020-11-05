import {IGuestRoomStatusUsecase} from "../usecase/roomStatusUsecase";
import {
    PlanMast, RoomStatus
} from '../../../entity/type'
import {roomStatusRepository} from "../../../repository"
import { getUniqueID } from "../../../util/generateUuid";


export class GuestRoomStatusInteractor implements IGuestRoomStatusUsecase {
    // ここでplanStatusRepositoryをインスタンス化
    private roomStatusRepository = new roomStatusRepository()
    
    public async updateStatus(roomStatus: RoomStatus[]): Promise<void> {
        await this.roomStatusRepository.updateRoomStatus(roomStatus);
    }
    public async fetchStatus(Time: string, roomID: string): Promise<any | null | undefined> {
        const tempStockNum = await (this.roomStatusRepository.fetchRoomStatus(Time, roomID));
        if(tempStockNum) {
            return 10
        } else {
            return 0
        }
    }
}