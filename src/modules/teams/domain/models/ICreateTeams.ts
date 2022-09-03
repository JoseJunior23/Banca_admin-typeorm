import { IEmployee } from '@modules/employees/domain/models/IEmployee';

export interface ICreateTeams {
  name: string;
  description: string;
  employees: IEmployee[];
}
