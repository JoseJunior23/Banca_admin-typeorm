import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ProductionDetailRepository } from '../repositories/ProductionDetailRepository';

interface IProductionDetail {
  id: string;
}

export class DeleteProductionDetailService {
  public async execute({ id }: IProductionDetail) {
    const productionDetailRepository = getCustomRepository(ProductionDetailRepository);

    const productionDetail = await productionDetailRepository.FindById(id);
    if (!productionDetail) {
      throw new AppError('Production detail not found !!!');
    }

    await productionDetailRepository.remove(productionDetail);
  }
}
