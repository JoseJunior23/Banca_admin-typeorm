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
  ) {}

  public async execute({
    id,
    variation,
    description,
    entry_date,
    factory_plan,
  }: IUpdatePlanInfo): Promise<IPlanInfo> {
    const planInfo = await this.planInfoRepository.findById(id);
    if (!planInfo) {
      throw new AppError(' Information plan not found !!!');
    }

    planInfo.variation = variation;
    planInfo.description = description;
    planInfo.entry_date = entry_date;
    planInfo.factory_plan = factory_plan;

    await this.planInfoRepository.save(planInfo);
    return planInfo;
  }
}
