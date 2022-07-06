import { Employee } from '@modules/employees/infra/typeorm/entities/Employee';

export interface ICreateTeams {
  name: string;
  description: string;
  employee?: Employee[];
}
