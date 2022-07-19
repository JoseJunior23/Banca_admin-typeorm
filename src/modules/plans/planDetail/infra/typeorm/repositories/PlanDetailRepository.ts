import { ICreatePlanDetail } from '@modules/plans/planDetail/domain/models/ICreatePlanDetail';
import { IPlanDetailRepository } from '@modules/plans/planDetail/domain/repositories/IPlandetailRepository';
import { dataSource } from '@shared/infra/typeorm/connection';
import { Repository } from 'typeorm';
import { PlanDetail } from '../entities/PlanDetail';

export class PlanDetailRepository implements IPlanDetailRepository {
  private ormRepository: Repository<PlanDetail>;
  constructor() {
    this.ormRepository = dataSource.getRepository(PlanDetail);
  }

  public async create({
    billed,
    billed_date,
    departure_date,
    entry_date,
    production_sheet,
    number_pairs,
    payment_date,
    plan_info,
    model,
    team,
  }: ICreatePlanDetail): Promise<PlanDetail> {
    const planDetail = this.ormRepository.create({
      billed,
      billed_date,
      departure_date,
      entry_date,
      production_sheet,
      number_pairs,
      payment_date,
      plan_info,
      model,
      team,
    });
    await this.ormRepository.save(planDetail);
    return planDetail;
  }

  public async save(planDetail: PlanDetail): Promise<PlanDetail> {
    await this.ormRepository.save(planDetail);
    return planDetail;
  }

  public async remove(planDetail: PlanDetail): Promise<void> {
    await this.ormRepository.remove(planDetail);
  }

  public async findAll(): Promise<PlanDetail[]> {
    const planDetails = this.ormRepository.find();
    return planDetails;
  }

  public async findById(id: string): Promise<PlanDetail | null> {
    const productionDetail = await this.ormRepository.findOneBy({ id });
    return productionDetail;
  }

  public async productionSheet(production_sheet: number): Promise<PlanDetail | null> {
    const planDetail = await this.ormRepository.findOneBy({ production_sheet });
    return planDetail;
  }
}
