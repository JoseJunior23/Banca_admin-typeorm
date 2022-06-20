import { Employee } from '@modules/employees/infra/typeorm/entities/Employee';

export interface IWorkSession {
  id: string;
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  employee: Employee[];
}
