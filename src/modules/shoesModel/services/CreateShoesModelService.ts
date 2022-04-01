import { Factory } from '@modules/factory/entities/Factory';
import { FactoryRepository } from '@modules/factory/repositories/FactoryRepository';
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
  factory: Factory;
}
export class CreateShoesModelService {
  public async execute({
    reference,
    description,
    price_pairs_shoes,
    price_pespontador,
    price_coladeira,
    factory,
  }: IShoesModel): Promise<ShoesModel> {
    const shoesModelRepository = getCustomRepository(ShoesModelRepository);
    const factoryRepository = getCustomRepository(FactoryRepository);

    const shoesModelExists = await shoesModelRepository.findByRef(reference);
    if (shoesModelExists) {
      throw new AppError('There is a shoes model registered with this name !!!');
    }

    const factoryExists = await factoryRepository.findById(factory.id);
    if (factoryExists) {
      throw new AppError('Could not find any factory with the given id !!!');
    }

    const shoesModel = shoesModelRepository.create({
      reference,
      description,
      price_pairs_shoes,
      price_pespontador,
      price_coladeira,
      factory,
    });

    await shoesModelRepository.save(shoesModel);
    return shoesModel;
  }
}
