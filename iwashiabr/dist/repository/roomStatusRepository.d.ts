import { RoomStatus } from "../index";
export declare class roomStatusRepository {
    updateRoomStatus(roomStatus: RoomStatus[] | null): Promise<void>;
    addRoomStatus(roomStatus: RoomStatus[] | null): Promise<void>;
    fetchRoomStatus(Time: string, roomID: string): Promise<{
        data?: import("./mutations").FetchRoomStatusQuery | undefined;
        extensions?: any;
        headers: import("graphql-request/dist/types.dom").Headers;
        status: number;
        errors?: import("graphql-request/dist/types").GraphQLError[] | undefined;
    }>;
}
