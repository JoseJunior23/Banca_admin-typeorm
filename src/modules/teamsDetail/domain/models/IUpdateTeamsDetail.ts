import { IEmployee } from '@modules/employees/domain/models/IEmployee';
import { ITeams } from '@modules/teams/domain/models/ITeams';

export interface IUpdateTeamsDetail {
  id: string;
  team: ITeams[];
  employee: IEmployee[];
}
