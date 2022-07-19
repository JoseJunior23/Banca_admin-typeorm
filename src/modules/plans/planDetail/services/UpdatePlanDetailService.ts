import { IPlanInfoRepository } from '@modules/plans/planInfo/domain/repositories/IPlanInfoRepository';
import { IShoesModelRepository } from '@modules/shoesModel/domain/repositories/IShoesModelRepository';
import { ITeamsRepository } from '@modules/teams/domain/repositories/ITeamsRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IPlanDetail } from '../domain/models/IPlanDetail';
import { IUpdatePlanDetail } from '../domain/models/IUpdatePlanDetail';
import { IPlanDetailRepository } from '../domain/repositories/IPlandetailRepository';

@injectable()
export class UpdateProductionDetailService {
  constructor(
    @inject('PlanDetailRepository')
    private planDetailRepository: IPlanDetailRepository,

    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository,

    @inject('PlanInfoRepository')
    private planInfoRepository: IPlanInfoRepository,

    @inject('ShoesModelRepository')
    private shoesModelRepository: IShoesModelRepository,
  ) {}

  public async execute({
    id,
    entry_date,
    departure_date,
    production_sheet,
    number_pairs,
    billed,
    billed_date,
    payment_date,
    team,
    plan_info,
    model,
  }: IUpdatePlanDetail): Promise<IPlanDetail> {
    const planDetail = await this.planDetailRepository.findById(id);
    if (!planDetail) {
      throw new AppError('There is a production sheet with this number !!!');
    }

    const existsTeams = await this.teamsRepository.findById(team.id);
    if (!existsTeams) {
      throw new AppError('Could not find any team with the given id !!!');
    }

    const planInfoExists = await this.planInfoRepository.findById(plan_info.id);
    if (!planInfoExists) {
      throw new AppError('Could not find any production Plan with the given id !!!');
    }

    const modelExists = await this.shoesModelRepository.findById(model.id);
    if (!modelExists) {
      throw new AppError('Could not find any production Plan with the given id !!!');
    }
    planDetail.entry_date = entry_date;
    planDetail.departure_date = departure_date;
    planDetail.production_sheet = production_sheet;
    planDetail.number_pairs = number_pairs;
    planDetail.billed = billed;
    planDetail.billed_date = billed_date;
    planDetail.payment_date = payment_date;
    planDetail.team = existsTeams;
    planDetail.plan_info = planInfoExists;
    planDetail.model = modelExists;

    await this.planDetailRepository.save(planDetail);
    return planDetail;
  }
}
