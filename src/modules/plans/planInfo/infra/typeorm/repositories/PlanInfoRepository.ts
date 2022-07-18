import { ICreatePlanInfo } from '@modules/plans/planInfo/domain/models/ICreatePlanInfo';
import { IPlanInfoRepository } from '@modules/plans/planInfo/domain/repositories/IPlanInfoRepository';
import { dataSource } from '@shared/infra/typeorm/connection';
import { Repository } from 'typeorm';
import { PlanInfo } from '../entities/PlanInfo';

export class PlanInfoRepository implements IPlanInfoRepository {
  private ormRepository: Repository<PlanInfo>;
  constructor() {
    this.ormRepository = dataSource.getRepository(PlanInfo);
  }

  public async create({
    variation,
    description,
    entry_date,
    factory,
    factory_plan,
  }: ICreatePlanInfo): Promise<PlanInfo> {
    const planInfo = this.ormRepository.create({
      variation,
      description,
      entry_date,
      factory,
      factory_plan,
    });
    await this.ormRepository.save(planInfo);
    return planInfo;
  }

  public async save(planInfo: PlanInfo): Promise<PlanInfo> {
    await this.ormRepository.save(planInfo);
    return planInfo;
  }

  public async remove(planInfo: PlanInfo): Promise<void> {
    await this.ormRepository.remove(planInfo);
  }

  public async findAll(): Promise<PlanInfo[]> {
    const plansInfo = this.ormRepository.find();
    return plansInfo;
  }

  // public async findById(id: string): Promise<PlanInfo | null> {
  //   const planInfo = await this.ormRepository.findOne({
  //     where: { id },
  //     relations: ['factory', 'planDetail'],
  //   });
  //   return planInfo;
  // }

  public async findById(id: string): Promise<PlanInfo | null> {
    const planInfo = await this.ormRepository.findOneBy({ id });
    return planInfo;
  }
}
