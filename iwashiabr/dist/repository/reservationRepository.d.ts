import { ReservationObject } from "../index";
export declare class reservationRepository {
    updateReservation(reservationObject: ReservationObject | null): Promise<void>;
    addReservation(reservationObject: ReservationObject | null): Promise<void>;
    fetchReservationObjects(reservationID: string | null | undefined): Promise<{
        data?: import("./mutations").FetchReservationObjectsQuery | undefined;
        extensions?: any;
        headers: import("graphql-request/dist/types.dom").Headers;
        status: number;
        errors?: import("graphql-request/dist/types").GraphQLError[] | undefined;
    }>;
}
