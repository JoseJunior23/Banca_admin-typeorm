import { ICreateWorkSession } from '../models/ICreateWorkSession';
import { IWorkSession } from '../models/IworkSessions';

export interface IWorkSessionsRepository {
  create(data: ICreateWorkSession): Promise<IWorkSession>;
  save(workSessions: IWorkSession): Promise<IWorkSession>;
  findAll(): Promise<IWorkSession[]>;
  remove(workSessions: IWorkSession): Promise<void>;
  findByName(name: string): Promise<IWorkSession | null>;
  findById(id: string): Promise<IWorkSession | null>;
}
