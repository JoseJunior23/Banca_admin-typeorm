import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ShoesModel } from '../entities/ShoesModel';
import { ShoesModelRepository } from '../repositories/ShoesModelRepostories';

interface IShoesModel {
  id: string;
  reference: string;
  description: string;
  price_pairs_shoes: number;
  price_pespontador: number;
  price_coladeira: number;
}

export class UpdateShoesModelService {
  public async execute({
    id,
    reference,
    description,
    price_pairs_shoes,
    price_pespontador,
    price_coladeira,
  }: IShoesModel): Promise<ShoesModel> {
    const shoesModelRepository = getCustomRepository(ShoesModelRepository);

    const shoesModel = await shoesModelRepository.findById(id);
    if (!shoesModel) {
      throw new AppError('Shoes model not found !!!');
    }

    shoesModel.reference = reference;
    shoesModel.description = description;
    shoesModel.price_pairs_shoes = price_pairs_shoes;
    shoesModel.price_pespontador = price_pespontador;
    shoesModel.price_coladeira = price_coladeira;

    await shoesModelRepository.save(shoesModel);
    return shoesModel;
  }
}
