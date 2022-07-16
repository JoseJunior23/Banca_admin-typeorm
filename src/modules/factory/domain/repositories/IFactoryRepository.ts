import { ICreateFactory } from '../models/ICreateFactory';
import { IFactory } from '../models/IFactory';

export interface IFactoryRepository {
  create(data: ICreateFactory): Promise<IFactory>;
  save(factory: IFactory): Promise<IFactory>;
  remove(factory: IFactory): Promise<void>;
  findById(id: string): Promise<IFactory | null>;
  findByName(name: string): Promise<IFactory | null>;
  findAll(): Promise<IFactory[]>;
}
