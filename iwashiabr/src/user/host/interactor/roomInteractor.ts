import {IGuestRoomUsecase} from "../usecase/roomUsecase";
import {
    RoomMast
} from '../../../entity/type'
import {roomMastRepository} from "../../../repository"
import { getUniqueID } from "../../../util/generateUuid";


export class GuestRoomInteractor implements IGuestRoomUsecase {
    // ここでroomMastをインスタンス化
    private roomMastRepository = new roomMastRepository()

    public async getBlancMast(): Promise<RoomMast> {
        const roomID: string = getUniqueID.getUniqueID(3);
        return {
            roomID,
            name: "",
            description: "",
            subDescription: "",
            maxPeopleNum: 0,
            stockNum: 0,
            minOrderNum: 0,
            deletedAt: undefined,
            inSale: undefined
        };
    }
    public async addMast(roomMast: RoomMast): Promise<any> {
        return await this.roomMastRepository.addRoom(roomMast);
    }
    public async updateMast(roomMast: RoomMast): Promise<any> {
        throw await this.roomMastRepository.updateRoom(roomMast);
    }
    public async fetchRoomMasts(roomID: string | undefined): Promise<any> {
        return (await this.roomMastRepository.fetchRoomMasts(roomID))
    }   
}