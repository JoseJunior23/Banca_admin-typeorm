import { IEmployee } from '@modules/employees/domain/models/IEmployee';
import { ITeams } from './ITeams';

export interface ITeamsEmployee {
  id: string;
  employee_id: IEmployee[];
  team_id: ITeams[];
  created_at: Date;
  updated_at: Date;
}
