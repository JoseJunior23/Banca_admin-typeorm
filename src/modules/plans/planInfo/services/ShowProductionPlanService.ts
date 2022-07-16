import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ProductionPlan } from '../entities/productionPlan';
import { ProductionPlanRepository } from '../repositories/ProductionPlanRepository';

interface IProductionPlan {
  id: string;
}

export class ShowProductionPlanService {
  public async execute({ id }: IProductionPlan): Promise<ProductionPlan> {
    const productionPlanRepository = getCustomRepository(ProductionPlanRepository);

    const productionPlan = await productionPlanRepository.findById(id);
    if (!productionPlan) {
      throw new AppError('Production Plan not found !!!');
    }

    return productionPlan;
  }
}
