import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ProductionDetail } from '../entities/ProductionDetail';
import { ProductionDetailRepository } from '../repositories/ProductionDetailRepository';

interface IProductionDetail {
  id: string;
}

export class ShowProductionDetailService {
  public async execute({ id }: IProductionDetail): Promise<ProductionDetail> {
    const productionDetailRepository = getCustomRepository(ProductionDetailRepository);

    const productionDetail = await productionDetailRepository.FindById(id);
    if (!productionDetail) {
      throw new AppError('Production detail not found !!!');
    }

    return productionDetail;
  }
}
