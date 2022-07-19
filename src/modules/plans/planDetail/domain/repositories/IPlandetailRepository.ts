import { ICreatePlanDetail } from '../models/ICreatePlanDetail';
import { IPlanDetail } from '../models/IPlanDetail';

export interface IPlanDetailRepository {
  create(data: ICreatePlanDetail): Promise<IPlanDetail>;
  save(planDetail: IPlanDetail): Promise<IPlanDetail>;
  remove(planDetail: IPlanDetail): Promise<void>;
  findAll(): Promise<IPlanDetail[]>;
  findById(id: string): Promise<IPlanDetail | null>;
  productionSheet(production_sheet: number): Promise<IPlanDetail | null>;
}
