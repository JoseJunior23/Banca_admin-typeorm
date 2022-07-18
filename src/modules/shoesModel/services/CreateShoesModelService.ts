import { IFactoryRepository } from '@modules/factory/domain/repositories/IFactoryRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICreateShoesModel } from '../domain/models/ICreateShoesModel';
import { IShoesModel } from '../domain/models/IShoesModel';
import { IShoesModelRepository } from '../domain/repositories/IShoesModelRepository';

@injectable()
export class CreateShoesModelService {
  constructor(
    @inject('ShoesModelRepository')
    private shoesModelRepository: IShoesModelRepository,

    @inject('FactoryRepository')
    private factoryRepository: IFactoryRepository,
  ) {}
  public async execute({
    reference,
    description,
    price_pairs_shoes,
    price_pespontador,
    price_coladeira,
    factory,
  }: ICreateShoesModel): Promise<IShoesModel> {
    const shoesModelExists = await this.shoesModelRepository.findByReference(reference);
    if (shoesModelExists) {
      throw new AppError('There is a shoes model registered with this name !!!');
    }

    const factoryExists = await this.factoryRepository.findById(factory.id);
    if (!factoryExists) {
      throw new AppError('Could not find any factory with the given id !!!');
    }

    const shoesModel = this.shoesModelRepository.create({
      reference,
      description,
      price_pairs_shoes,
      price_pespontador,
      price_coladeira,
      factory: factoryExists,
    });

    return shoesModel;
  }
}
