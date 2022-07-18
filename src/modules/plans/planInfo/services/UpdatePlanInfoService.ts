import { IFactoryRepository } from '@modules/factory/domain/repositories/IFactoryRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IPlanInfo } from '../domain/models/IPlanInfo';
import { IUpdatePlanInfo } from '../domain/models/IUpdatePlanInfo';
import { IPlanInfoRepository } from '../domain/repositories/IPlanInfoRepository';

@injectable()
export class UpdatePlanInfoService {
  constructor(
    @inject('PlanInfoRepository')
    private planInfoRepository: IPlanInfoRepository,

    @inject('FactoryRepository')
    private factoryRepository: IFactoryRepository,
  ) {}

  public async execute({
    id,
    variation,
    description,
    entry_date,
    factory_plan,
    factory,
  }: IUpdatePlanInfo): Promise<IPlanInfo> {
    const planInfo = await this.planInfoRepository.findById(id);
    if (!planInfo) {
      throw new AppError(' Information plan not found !!!');
    }

    const factoryExists = await this.factoryRepository.findById(factory.id);
    if (!factoryExists) {
      throw new AppError('Could not find any factory with the given id !!!');
    }

    planInfo.variation = variation;
    planInfo.description = description;
    planInfo.entry_date = entry_date;
    planInfo.factory_plan = factory_plan;
    planInfo.factory = factoryExists;

    await this.planInfoRepository.save(planInfo);
    return planInfo;
  }
}
