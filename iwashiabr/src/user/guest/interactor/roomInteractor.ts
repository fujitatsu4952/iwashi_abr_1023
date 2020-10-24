import {IGuestRoomUsecase} from "../usecase/roomUsecase";
import {
    RoomMast
} from '../../../entity/type'
import {roomMastRepository} from "../../../repository"
import { getUniqueID } from "../../../util/generateUuid";


export class GuestRoomInteractor implements IGuestRoomUsecase {
    // ここでplanMastをインスタンス化
    private planMastRepository = new roomMastRepository()

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
        throw new Error('Method not implemented.');
    }
    public async updateMast(roomMast: RoomMast): Promise<any> {
        throw new Error('Method not implemented.');
    }
    public async fetchRoomMasts(roomID: string | undefined): Promise<any> {
        return (await this.planMastRepository.fetchRoomMasts(roomID))
    }   
}