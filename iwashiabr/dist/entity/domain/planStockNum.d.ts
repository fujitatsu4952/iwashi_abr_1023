import { Scalars } from '../../entity';
export declare class PlanStockNum {
    private planStatusRepository;
    private planInteractor;
    stockNumList: number[];
    planMastStockNum: number;
    PlanStockNum(dateTimeRange: Scalars["AWSDate"][], planID: string): Promise<number>;
}
