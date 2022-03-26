import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ShoesModelRepository } from '../repositories/ShoesModelRepostories';

interface IShoesModel {
  id: string;
}

export class DeleteShoesModelService {
  public async execute({ id }: IShoesModel) {
    const shoesModelRepository = getCustomRepository(ShoesModelRepository);

    const shoesModel = await shoesModelRepository.findById(id);
    if (!shoesModel) {
      throw new AppError('Shoes model not found !!!');
    }

    await shoesModelRepository.remove(shoesModel);
  }
}
