import { Employee } from '@modules/employees/infra/typeorm/entities/Employee';
import { ITeams } from './ITeams';

export interface ICreateTeamsEmployee {
  employees: Employee[];
  team: ITeams;
}
