import { AppError } from '@shared/errors/AppError';
import { inject } from 'tsyringe';
import { IPlanDetail } from '../domain/models/IPlanDetail';
import { IPlanDetailId } from '../domain/models/IPlanDetailId';
import { IPlanDetailRepository } from '../domain/repositories/IPlandetailRepository';

export class ShowPlanDetailService {
  constructor(
    @inject('PlanDetailRepository')
    private planDetailRepository: IPlanDetailRepository,
  ) {}

  public async execute({ id }: IPlanDetailId): Promise<IPlanDetail> {
    const planDetail = await this.planDetailRepository.findById(id);
    if (!planDetail) {
      throw new AppError('Plan detail not found !!!');
    }

    return planDetail;
  }
}
