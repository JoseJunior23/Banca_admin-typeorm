import { IEmployee } from '@modules/employees/domain/models/IEmployee';
import { ITeams } from '@modules/teams/domain/models/ITeams';

export interface ICreateTeamsDetail {
  team: ITeams[];
  employee: IEmployee[];
}
