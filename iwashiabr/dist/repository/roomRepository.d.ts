import { RoomMast } from "../index";
export declare class roomMastRepository {
    updateRoom(roomMast: RoomMast | null): Promise<void>;
    addRoom(roomMast: RoomMast | null): Promise<void>;
    fetchRoomMasts(roomID: string | null | undefined): Promise<({
        __typename?: "RoomMast" | undefined;
    } & Pick<import("./mutations").RoomMast, "description" | "roomID" | "name" | "subDescription" | "stockNum" | "deletedAt" | "inSale" | "maxPeopleNum" | "minOrderNum">)[] | undefined>;
}
