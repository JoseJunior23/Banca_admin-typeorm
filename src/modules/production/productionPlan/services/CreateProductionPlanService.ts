import { Factory } from '@modules/factory/entities/Factory';
import { FactoryRepository } from '@modules/factory/repositories/FactoryRepository';
import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ProductionPlan } from '../entities/productionPlan';
import { ProductionPlanRepository } from '../repositories/ProductionPlanRepository';

interface IProductionPlan {
  variation: string;
  description: string;
  entry_date: Date;
  factory_plan: number;
  factory: Factory;
}
export class CreateProductionPlanService {
  public async execute({
    variation,
    description,
    entry_date,
    factory_plan,
    factory,
  }: IProductionPlan): Promise<ProductionPlan> {
    const productionPlanRepository = getCustomRepository(ProductionPlanRepository);
    const factoryRepository = getCustomRepository(FactoryRepository);

    const factoryExists = await factoryRepository.findById(factory.id);
    if (!factoryExists) {
      throw new AppError('Could not find any factory with the given id !!!');
    }

    const productionPlan = productionPlanRepository.create({
      variation,
      description,
      entry_date,
      factory_plan,
      factory: factoryExists,
    });

    await productionPlanRepository.save(productionPlan);

    return productionPlan;
  }
}
