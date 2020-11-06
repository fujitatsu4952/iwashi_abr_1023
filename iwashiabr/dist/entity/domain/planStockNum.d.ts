import { Scalars } from '../../entity';
export declare class PlanStockNum {
    private planStatusRepository;
    private planInteractor;
    private stockNumList;
    private planMastStockNum;
    PlanStockNum(dateTimeRange: Scalars["AWSDate"][], planID: string): Promise<number>;
}
