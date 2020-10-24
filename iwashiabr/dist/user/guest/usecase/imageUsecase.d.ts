export interface IGuestImageUsecase {
    fetchPlanMasts(keyName: string | null | undefined): Promise<any | undefined>;
}
