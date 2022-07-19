import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IPlanDetailId } from '../domain/models/IPlanDetailId';
import { IPlanDetailRepository } from '../domain/repositories/IPlandetailRepository';

@injectable()
export class DeletePlanDetailService {
  constructor(
    @inject('PlanDetailRepository')
    private planDetailRepository: IPlanDetailRepository,
  ) {}

  public async execute({ id }: IPlanDetailId) {
    const planDetail = await this.planDetailRepository.findById(id);
    if (!planDetail) {
      throw new AppError('Production detail not found !!!');
    }

    await this.planDetailRepository.remove(planDetail);
  }
}
