import { ICreateEmployee } from '@modules/employees/domain/models/ICreateEmployee';

export interface ITeamsEmployees {
  id: string;
  employee: ICreateEmployee[];
  created_at: Date;
  updated_at: Date;
}
