import { inject, injectable } from 'tsyringe';
import { IPlanInfo } from '../domain/models/IPlanInfo';
import { IPlanInfoRepository } from '../domain/repositories/IPlanInfoRepository';

@injectable()
export class ListPlanInfoService {
  constructor(
    @inject('PlanInfoRepository')
    private planInfoRepository: IPlanInfoRepository,
  ) {}

  public async execute(): Promise<IPlanInfo[]> {
    const planInfo = await this.planInfoRepository.findAll();
    return planInfo;
  }
}
