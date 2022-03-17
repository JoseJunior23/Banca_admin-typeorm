import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ProductionPlan } from '../entities/productionPlan';
import { ProductionPlanRepository } from '../repositories/ProductionPlanRepository';

interface IProductionPlan {
  id: string;
  variation: string;
  description: string;
  entry_date: Date;
  factory_plan: number;
}
export class UpdateProductionPlanService {
  public async execute({
    id,
    variation,
    description,
    entry_date,
    factory_plan,
  }: IProductionPlan): Promise<ProductionPlan> {
    const productionPlanRepository = getCustomRepository(ProductionPlanRepository);

    const productionPlan = await productionPlanRepository.findById(id);
    if (!productionPlan) {
      throw new AppError('Production Plan not found !!!');
    }

    productionPlan.variation = variation;
    productionPlan.description = description;
    productionPlan.entry_date = entry_date;
    productionPlan.factory_plan = factory_plan;

    await productionPlanRepository.save(productionPlan);
    return productionPlan;
  }
}
