import { getCustomRepository } from 'typeorm';
import { ProductionPlan } from '../entities/productionPlan';
import { ProductionPlanRepository } from '../repositories/ProductionPlanRepository';

export class ListProductionService {
  public async execute(): Promise<ProductionPlan[]> {
    const productionPlanRepository = getCustomRepository(ProductionPlanRepository);

    const productionPlan = await productionPlanRepository.find();

    return productionPlan;
  }
}
