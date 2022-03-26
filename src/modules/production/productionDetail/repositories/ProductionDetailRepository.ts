import { EntityRepository, Repository } from 'typeorm';
import { ProductionDetail } from '../entities/ProductionDetail';

@EntityRepository(ProductionDetail)
export class ProductionDetailRepository extends Repository<ProductionDetail> {
  public async FindById(id: string): Promise<ProductionDetail | undefined> {
    const productionDetail = await this.findOne({
      id,
    });
    return productionDetail;
  }
}
