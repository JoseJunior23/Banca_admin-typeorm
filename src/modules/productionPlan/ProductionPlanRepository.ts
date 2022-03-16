import { EntityRepository, Repository } from 'typeorm';
import { ProductionPlan } from './entities/productionPlan';

@EntityRepository(ProductionPlan)
export class ProductionPlanRepository extends Repository<ProductionPlan> {
  public async findById(id: string): Promise<ProductionPlan | undefined> {
    const productionPlan = await this.findOne({
      where: {
        id,
      },
    });
    return productionPlan;
  }
}
