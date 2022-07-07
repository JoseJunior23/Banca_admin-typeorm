import { IEmployee } from '@modules/employees/domain/models/IEmployee';
import { ITeams } from '@modules/teams/domain/models/ITeams';

export interface ITeamsDetail {
  id: string;
  team: ITeams[];
  employee: IEmployee[];
  created_at: Date;
  updated_at: Date;
}
