import { IFactoryRepository } from '@modules/factory/domain/repositories/IFactoryRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IShoesModel } from '../domain/models/IShoesModel';
import { IUpdateShoesModel } from '../domain/models/IUpdateShoesModel';
import { IShoesModelRepository } from '../domain/repositories/IShoesModelRepository';

@injectable()
export class UpdateShoesModelService {
  constructor(
    @inject('ShoesModelRepository')
    private shoesModelRepository: IShoesModelRepository,

    @inject('FactoryRepository')
    private factoryRepository: IFactoryRepository,
  ) {}

  public async execute({
    id,
    reference,
    description,
    price_pairs_shoes,
    price_pespontador,
    price_coladeira,
    factory,
  }: IUpdateShoesModel): Promise<IShoesModel> {
    const shoesModel = await this.shoesModelRepository.findById(id);
    if (!shoesModel) {
      throw new AppError('Shoes model not found !!!');
    }

    const factoryExists = await this.factoryRepository.findById(factory.id);
    if (!factoryExists) {
      throw new AppError('Could not find any factory with the given id !!!');
    }

    shoesModel.reference = reference;
    shoesModel.description = description;
    shoesModel.price_pairs_shoes = price_pairs_shoes;
    shoesModel.price_pespontador = price_pespontador;
    shoesModel.price_coladeira = price_coladeira;
    shoesModel.factory = factoryExists;

    await this.shoesModelRepository.save(shoesModel);
    return shoesModel;
  }
}
