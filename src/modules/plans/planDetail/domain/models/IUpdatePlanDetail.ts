import { ITeams } from '@modules/teams/domain/models/ITeams';

export interface IUpdatePlanDetail {
  id: string;
  entry_date: Date;
  departure_date: Date;
  production_sheet: number;
  number_pairs: number;
  billed: number;
  billed_date: number;
  payment_date: Date;
  team: ITeams;
  // prod_plan: string;
  // model: string;
}
