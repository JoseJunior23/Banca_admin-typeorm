import { inject, injectable } from 'tsyringe';
import { ICreatePlanInfo } from '../domain/models/ICreatePlanInfo';
import { IPlanInfo } from '../domain/models/IPlanInfo';
import { IPlanInfoRepository } from '../domain/repositories/IPlanInfoRepository';

@injectable()
export class CreatePlanInfoService {
  constructor(
    @inject('PlanInfoRepository')
    private planInfoRepository: IPlanInfoRepository,
  ) {}

  public async execute({
    variation,
    description,
    entry_date,
    factory_plan,
  }: ICreatePlanInfo): Promise<IPlanInfo> {
    const planInfo = this.planInfoRepository.create({
      variation,
      description,
      entry_date,
      factory_plan,
    });

    return planInfo;
  }
}
