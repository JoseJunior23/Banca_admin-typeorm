import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IPlanInfo } from '../domain/models/IPlanInfo';
import { IPlanInfoId } from '../domain/models/IPlanInfoId';
import { IPlanInfoRepository } from '../domain/repositories/IPlanInfoRepository';

@injectable()
export class ShowPlanInfoService {
  constructor(
    @inject('PlanInfoRepository')
    private planInfoRepository: IPlanInfoRepository,
  ) {}

  public async execute({ id }: IPlanInfoId): Promise<IPlanInfo> {
    const planInfo = await this.planInfoRepository.findById(id);
    if (!planInfo) {
      throw new AppError(' Information plan not found !!!');
    }

    return planInfo;
  }
}
