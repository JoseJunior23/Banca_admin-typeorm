import { ICreateEmployee } from '../models/ICreateEmployee';
import { IEmployee } from '../models/IEmployee';
import { IEmployeeId } from '../models/IEmployeeId';

export interface IEmployeeRepository {
  create(data: ICreateEmployee): Promise<IEmployee>;
  save(employee: IEmployee): Promise<IEmployee>;
  remove(employee: IEmployee): Promise<void>;
  findByName(name: string): Promise<IEmployee | null>;
  findById(id: string): Promise<IEmployee | null>;
  findAllByIds(employees: IEmployeeId[]): Promise<IEmployee[]>;
  findAll(): Promise<IEmployee[]>;
}
