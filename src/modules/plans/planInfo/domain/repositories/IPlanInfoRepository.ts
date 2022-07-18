import { ICreatePlanInfo } from '../models/ICreatePlanInfo';
import { IPlanInfo } from '../models/IPlanInfo';

export interface IPlanInfoRepository {
  create(data: ICreatePlanInfo): Promise<IPlanInfo>;
  save(planInfo: IPlanInfo): Promise<IPlanInfo>;
  remove(planInfo: IPlanInfo): Promise<void>;
  findAll(): Promise<IPlanInfo[]>;
  findById(id: string): Promise<IPlanInfo | null>;
}
