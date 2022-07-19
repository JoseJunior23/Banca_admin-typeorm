import { inject, injectable } from 'tsyringe';
import { IPlanDetail } from '../domain/models/IPlanDetail';
import { IPlanDetailRepository } from '../domain/repositories/IPlandetailRepository';

@injectable()
export class ListPlanDetailService {
  constructor(
    @inject('PlanDetailRepository')
    private planDetailRepository: IPlanDetailRepository,
  ) {}

  public async execute(): Promise<IPlanDetail[]> {
    const planDetail = await this.planDetailRepository.findAll();
    return planDetail;
  }
}
