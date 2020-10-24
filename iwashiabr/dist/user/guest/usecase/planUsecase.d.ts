import { PlanMast, Scalars } from '../../../entity';
export interface IGuestPlanUsecase {
    getBlancMast(): Promise<PlanMast>;
    addMast(planMast: PlanMast): Promise<any>;
    updateMast(planMast: PlanMast): Promise<any>;
    fetchPlanMasts(planID: Scalars['ID'] | undefined): Promise<any | undefined>;
}
