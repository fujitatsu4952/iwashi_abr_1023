import { Scalars } from '../../entity';
export declare class PlanStockNum {
    private planStatusRepository;
    private planInteractor;
    PlanStockNum(dateTimeRange: Scalars["AWSDate"][], planID: string): Promise<number>;
}
