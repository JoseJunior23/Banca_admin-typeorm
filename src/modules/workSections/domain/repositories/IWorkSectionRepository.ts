import { ICreateWorkSection } from '../models/ICreateWorkSection';
import { IWorkSection } from '../models/IWorkSection';

export interface IWorkSectionRepository {
  create(data: ICreateWorkSection): Promise<IWorkSection>;
  save(workSection: IWorkSection): Promise<IWorkSection>;
  findAll(): Promise<IWorkSection[]>;
  remove(workSection: IWorkSection): Promise<void>;
  findByName(name: string): Promise<IWorkSection | null>;
  findById(id: string): Promise<IWorkSection | null>;
}
