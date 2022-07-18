import { ICreateShoesModel } from '../models/ICreateShoesModel';
import { IShoesModel } from '../models/IShoesModel';

export interface IShoesModelRepository {
  create(data: ICreateShoesModel): Promise<IShoesModel>;
  save(shoesModel: IShoesModel): Promise<IShoesModel>;
  remove(shoesModel: IShoesModel): Promise<void>;
  findAll(): Promise<IShoesModel[]>;
  findById(id: string): Promise<IShoesModel | null>;
  findByReference(reference: string): Promise<IShoesModel | null>;
}
