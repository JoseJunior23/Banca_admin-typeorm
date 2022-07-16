import { EntityRepository, In, Repository } from 'typeorm';
import { ProductionDetail } from '../entities/ProductionDetail';

interface IProductionDetails {
  entryDate: Date;
}
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

  public async findByDate(entryDate: IProductionDetails[]): Promise<ProductionDetail[]> {
    const productionDate = entryDate.map(production => production.entryDate);
    const existsDate = await this.find({
      where: {
        id: In(productionDate),
      },
    });
    return existsDate;
  }
}
