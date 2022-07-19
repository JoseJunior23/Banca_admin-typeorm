import { IPlanInfoRepository } from '@modules/plans/planInfo/domain/repositories/IPlanInfoRepository';
import { IShoesModelRepository } from '@modules/shoesModel/domain/repositories/IShoesModelRepository';
import { ITeamsRepository } from '@modules/teams/domain/repositories/ITeamsRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICreatePlanDetail } from '../domain/models/ICreatePlanDetail';
import { IPlanDetail } from '../domain/models/IPlanDetail';
import { IPlanDetailRepository } from '../domain/repositories/IPlandetailRepository';

@injectable()
export class CreatePlanDetailService {
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
  }: ICreatePlanDetail): Promise<IPlanDetail> {
    const ProductionExists = await this.planDetailRepository.productionSheet(production_sheet);
    if (ProductionExists) {
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

    const planDetail = this.planDetailRepository.create({
      entry_date,
      departure_date,
      production_sheet,
      number_pairs,
      billed,
      billed_date,
      payment_date,
      team: existsTeams,
      plan_info: planInfoExists,
      model: modelExists,
    });
    return planDetail;
  }
}
