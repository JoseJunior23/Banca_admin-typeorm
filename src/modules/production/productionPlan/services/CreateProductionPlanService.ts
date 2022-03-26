import { getCustomRepository } from 'typeorm';
import { ProductionPlan } from '../entities/productionPlan';
import { ProductionPlanRepository } from '../repositories/ProductionPlanRepository';

interface IProductionPlan {
  variation: string;
  description: string;
  entry_date: Date;
  factory_plan: number;
}
export class CreateProductionPlanService {
  public async execute({
    variation,
    description,
    entry_date,
    factory_plan,
  }: IProductionPlan): Promise<ProductionPlan> {
    const productionPlanRepository = getCustomRepository(ProductionPlanRepository);

    const productionPlan = productionPlanRepository.create({
      variation,
      description,
      entry_date,
      factory_plan,
    });

    await productionPlanRepository.save(productionPlan);

    return productionPlan;
  }
}
