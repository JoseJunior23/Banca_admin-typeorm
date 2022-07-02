import { Employee } from '@modules/employees/infra/typeorm/entities/Employee';

export interface ITeams {
  id: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  employee?: Employee[];
}
