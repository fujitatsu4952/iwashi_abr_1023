import { RoomStatus } from "../index";
export declare class roomStatusRepository {
    updateRoomStatus(roomStatus: RoomStatus[] | null): Promise<void>;
    addRoomStatus(roomStatus: RoomStatus[] | null): Promise<void>;
    fetchRoomStatus(Time: string, roomID: string): Promise<({
        __typename?: "RoomStatus" | undefined;
    } & Pick<import("./mutations").RoomStatus, "Time" | "roomID" | "soldNum" | "availableNum" | "isAvailabe">)[] | null>;
}
