import { Employee } from '@modules/employees/infra/typeorm/entities/Employee';

export interface IUpdateTeams {
  id: string;
  name: string;
  description: string;
  employee?: Employee[];
}
