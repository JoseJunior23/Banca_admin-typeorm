import { IRequestEmployee } from './IRequestTeamEmployees';
import { ITeams } from './ITeams';

export interface ICreateTeamEmployee {
  team: ITeams;
  employees: IRequestEmployee[];
}
