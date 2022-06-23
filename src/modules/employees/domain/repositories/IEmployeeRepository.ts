import { ICreateEmployee } from '../models/ICreateEmployee';
import { IEmployee } from '../models/IEmployee';

export interface IEmployeeRepository {
  create(data: ICreateEmployee): Promise<IEmployee>;
  save(employee: IEmployee): Promise<IEmployee>;
  findAll(): Promise<IEmployee[]>;
  remove(employee: IEmployee): Promise<void>;
  FindByEmployee(nickname: string): Promise<IEmployee | null>;
  findById(id: string): Promise<IEmployee | null>;
}
