import { IFactoryRepository } from '@modules/factory/domain/repositories/IFactoryRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICreatePlanInfo } from '../domain/models/ICreatePlanInfo';
import { IPlanInfo } from '../domain/models/IPlanInfo';
import { IPlanInfoRepository } from '../domain/repositories/IPlanInfoRepository';

@injectable()
export class CreatePlanInfoService {
  constructor(
    @inject('PlanInfoRepository')
    private planInfoRepository: IPlanInfoRepository,

    @inject('FactoryRepository')
    private factoryRepository: IFactoryRepository,
  ) {}

  public async execute({
    variation,
    description,
    entry_date,
    factory_plan,
    factory,
  }: ICreatePlanInfo): Promise<IPlanInfo> {
    const factoryExists = await this.factoryRepository.findById(factory.id);
    if (!factoryExists) {
      throw new AppError('Could not find any factory with the given id !!!');
    }

    const planInfo = this.planInfoRepository.create({
      variation,
      description,
      entry_date,
      factory_plan,
      factory: factoryExists,
    });

    return planInfo;
  }
}
