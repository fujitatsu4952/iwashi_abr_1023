import {IGuestRoomStatusUsecase} from "../usecase/roomStatusUsecase";
import { RoomStatus, RoomMast } from '../../../entity/type'
import {roomStatusRepository, roomMastRepository} from "../../../repository"
import { roomStockNum } from "../../../index";


export class GuestRoomStatusInteractor implements IGuestRoomStatusUsecase {
    // ここでroomStatusRepositoryをインスタンス化
    private roomStatusRepository = new roomStatusRepository()
    // これはUtilをインスタンス化
    private roomSotckNumCalc = new roomStockNum();
        public async updateStatus(roomStatus: RoomStatus[]): Promise<void> {
        await this.roomStatusRepository.updateRoomStatus(roomStatus);
    }
    public async fetchStatus(time: string, roomID: string): Promise<number> {
        return await this.roomSotckNumCalc.roomStockNumSingle(time, roomID)
    }

    public async fetchStatusWithinRange(dateTimeRange: string[], roomID: string): Promise<number> {
        return await this.roomSotckNumCalc.roomStockNum(dateTimeRange, roomID)
    }
}