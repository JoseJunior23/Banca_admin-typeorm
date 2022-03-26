import { EntityRepository, Repository } from 'typeorm';
import { ProductionDetail } from '../entities/ProductionDetail';

@EntityRepository(ProductionDetail)
export class ProductionDetailRepository extends Repository<ProductionDetail> {
  public async FindById(id: string): Promise<ProductionDetail | undefined> {
    const productionDetail = await this.findOne({
      where: {
        id,
      },
    });
    return productionDetail;
  }

  public async ProductionSheet(production_sheet: number): Promise<ProductionDetail | undefined> {
    const productionDetail = await this.findOne({
      where: {
        production_sheet,
      },
    });
    return productionDetail;
  }
}
