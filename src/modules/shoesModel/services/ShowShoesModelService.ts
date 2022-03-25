import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ShoesModel } from '../entities/ShoesModel';
import { ShoesModelRepository } from '../repositories/ShoesModelRepostories';

interface IShoesModel {
  id: string;
}

export class ShowShoesModelService {
  public async execute({ id }: IShoesModel): Promise<ShoesModel> {
    const shoesModelRepository = getCustomRepository(ShoesModelRepository);

    const shoesModel = await shoesModelRepository.findById(id);
    if (!shoesModel) {
      throw new AppError('Shoes model not found !!!');
    }

    return shoesModel;
  }
}
