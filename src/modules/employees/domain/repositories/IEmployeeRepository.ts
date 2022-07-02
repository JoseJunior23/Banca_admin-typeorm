import { IWorkSession } from '@modules/workSessions/domain/models/IworkSessions';
import { ICreateEmployee } from '../models/ICreateEmployee';
import { IEmployee } from '../models/IEmployee';

export interface IEmployeeRepository {
  findAll(): Promise<IEmployee[]>;
  findByName(nickname: string): Promise<IEmployee | null>;
  findById(id: string): Promise<IEmployee | null>;
  findBySession(session: IWorkSession): Promise<IEmployee | null>;
  create(data: ICreateEmployee): Promise<IEmployee>;
  save(employee: IEmployee): Promise<IEmployee>;
  remove(employee: IEmployee): Promise<void>;
}
