import { IFactory } from '@modules/factory/domain/models/IFactory';

export interface ICreatePlanInfo {
  variation: string;
  description: string;
  entry_date: Date;
  factory_plan: number;
  factory: IFactory;
}
