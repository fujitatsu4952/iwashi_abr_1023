import { RoomMast } from "../index";
export declare class roomMastRepository {
    updateRoom(roomMast: RoomMast | null): Promise<void>;
    addRoom(roomMast: RoomMast | null): Promise<void>;
    fetchRoomMasts(roomID: string | null | undefined): Promise<{
        data?: import("./mutations").FetchRoomMastsQuery | undefined;
        extensions?: any;
        headers: import("graphql-request/dist/types.dom").Headers;
        status: number;
        errors?: import("graphql-request/dist/types").GraphQLError[] | undefined;
    }>;
}
