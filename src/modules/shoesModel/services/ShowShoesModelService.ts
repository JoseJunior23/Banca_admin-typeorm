import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IShoesModel } from '../domain/models/IShoesModel';
import { IShoesModelId } from '../domain/models/IShoesModelId';
import { IShoesModelRepository } from '../domain/repositories/IShoesModelRepository';

@injectable()
export class ShowShoesModelService {
  constructor(
    @inject('ShoesModelRepository')
    private shoesModelRepository: IShoesModelRepository,
  ) {}

  public async execute({ id }: IShoesModelId): Promise<IShoesModel> {
    const shoesModel = await this.shoesModelRepository.findById(id);
    if (!shoesModel) {
      throw new AppError('Shoes model not found !!!');
    }

    return shoesModel;
  }
}
