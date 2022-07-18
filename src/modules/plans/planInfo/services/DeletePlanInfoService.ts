import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IPlanInfoId } from '../domain/models/IPlanInfoId';
import { IPlanInfoRepository } from '../domain/repositories/IPlanInfoRepository';

@injectable()
export class DeletePlanInfoService {
  constructor(
    @inject('PlanInfoRepository')
    private planInfoRepository: IPlanInfoRepository,
  ) {}

  public async execute({ id }: IPlanInfoId) {
    const planInfo = await this.planInfoRepository.findById(id);
    if (!planInfo) {
      throw new AppError('Production Plan not found !!!');
    }

    await this.planInfoRepository.remove(planInfo);
  }
}
