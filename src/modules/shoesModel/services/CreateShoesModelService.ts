import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ShoesModel } from '../entities/ShoesModel';
import { ShoesModelRepository } from '../repositories/ShoesModelRepostories';

interface IShoesModel {
  reference: string;
  description: string;
  price_pairs_shoes: number;
  price_pespontador: number;
  price_coladeira: number;
}
export class CreateShoesModelService {
  public async execute({
    reference,
    description,
    price_pairs_shoes,
    price_pespontador,
    price_coladeira,
  }: IShoesModel): Promise<ShoesModel> {
    const shoesModelRepository = getCustomRepository(ShoesModelRepository);

    const shoesModelExists = await shoesModelRepository.findByRef(reference);
    if (shoesModelExists) {
      throw new AppError('There is a shoes model registered with this name !!!');
    }

    const shoesModel = shoesModelRepository.create({
      reference,
      description,
      price_pairs_shoes,
      price_pespontador,
      price_coladeira,
    });

    await shoesModelRepository.save(shoesModel);
    return shoesModel;
  }
}
