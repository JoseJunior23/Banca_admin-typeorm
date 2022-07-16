import { getCustomRepository } from 'typeorm';
import { ProductionDetail } from '../entities/ProductionDetail';
import { ProductionDetailRepository } from '../repositories/ProductionDetailRepository';

export class ListProductionDetailService {
  public async execute(): Promise<ProductionDetail[]> {
    const productionDetailRepository = getCustomRepository(ProductionDetailRepository);

    const productionDetail = await productionDetailRepository.find();
    return productionDetail;
  }
}
