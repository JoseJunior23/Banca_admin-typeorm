import { IFactory } from '@modules/factory/domain/models/IFactory';

export interface IUpdatePlanInfo {
  id: string;
  variation: string;
  description: string;
  entry_date: Date;
  factory_plan: number;
  factory: IFactory;
}
