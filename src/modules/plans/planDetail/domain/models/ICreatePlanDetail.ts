import { IPlanInfo } from '@modules/plans/planInfo/domain/models/IPlanInfo';
import { IShoesModel } from '@modules/shoesModel/domain/models/IShoesModel';
import { ITeams } from '@modules/teams/domain/models/ITeams';

export interface ICreatePlanDetail {
  entry_date: Date;
  departure_date: Date;
  production_sheet: number;
  number_pairs: number;
  billed: number;
  billed_date: Date;
  payment_date: Date;
  team: ITeams;
  plan_info: IPlanInfo;
  model: IShoesModel;
}
