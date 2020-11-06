import { Scalars } from '../../entity';
export declare class planStockNum {
    private planStatusRepository;
    private planInteractor;
    planStockNum(dateTimeRange: Scalars["AWSDate"][], planID: string): Promise<number>;
    planStockNumSingle(time: Scalars["AWSDate"], planID: string): Promise<number>;
}
