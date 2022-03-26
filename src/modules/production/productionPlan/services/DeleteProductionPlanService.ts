import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ProductionPlanRepository } from '../repositories/ProductionPlanRepository';

interface IProductionPlan {
  id: string;
}

export class DeleteProductionPlanService {
  public async execute({ id }: IProductionPlan) {
    const productionPlanRepository = getCustomRepository(ProductionPlanRepository);
    const productionPlan = await productionPlanRepository.findById(id);
    if (!productionPlan) {
      throw new AppError('Production Plan not found !!!');
    }

    await productionPlanRepository.remove(productionPlan);
  }
}
