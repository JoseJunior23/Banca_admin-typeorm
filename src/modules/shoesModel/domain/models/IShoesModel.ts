import { IFactory } from '@modules/factory/domain/models/IFactory';

export interface IShoesModel {
  id: string;
  reference: string;
  description: string;
  price_pairs_shoes: number;
  price_pespontador: number;
  price_coladeira: number;
  created_at: Date;
  updated_at: Date;
  factory: IFactory;
}
