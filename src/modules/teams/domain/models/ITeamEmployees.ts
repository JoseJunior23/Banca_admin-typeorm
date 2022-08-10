import { ICreateEmployee } from '@modules/employees/domain/models/ICreateEmployee';
import { ITeams } from './ITeams';

export interface ITeamsEmployees {
  id: string;
  team_employee: ICreateEmployee[];
  team: ITeams;
  created_at: Date;
  updated_at: Date;
}
