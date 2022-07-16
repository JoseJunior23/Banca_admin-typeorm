import { ProductionPlanRepository } from '@modules/production/productionPlan/repositories/ProductionPlanRepository';
import { ShoesModelRepository } from '@modules/shoesModel/repositories/ShoesModelRepostories';
import { TeamsRepository } from '@modules/teams/repositories/TeamsRepository';
import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ProductionDetail } from '../entities/ProductionDetail';
import { ProductionDetailRepository } from '../repositories/ProductionDetailRepository';

interface IProductionDetail {
  entry_date: Date;
  departure_date: Date;
  production_sheet: number;
  number_pairs: number;
  billed: number;
  billed_date: number;
  payment_date: Date;
  team: string;
  prod_plan: string;
  model: string;
}

export class CreateProductionDetailService {
  public async execute({
    entry_date,
    departure_date,
    production_sheet,
    number_pairs,
    billed,
    billed_date,
    payment_date,
    team,
    prod_plan,
    model,
  }: IProductionDetail): Promise<ProductionDetail> {
    const productionDetailRepository = getCustomRepository(ProductionDetailRepository);
    const teamsRepository = getCustomRepository(TeamsRepository);
    const productionPlanRepository = getCustomRepository(ProductionPlanRepository);
    const modelRepository = getCustomRepository(ShoesModelRepository);

    const ProductionExists = await productionDetailRepository.ProductionSheet(production_sheet);
    if (ProductionExists) {
      throw new AppError('There is a production sheet with this number !!!');
    }

    const existsTeams = await teamsRepository.findById(team);
    if (!existsTeams) {
      throw new AppError('Could not find any team with the given id !!!');
    }

    const prodPlanExists = await productionPlanRepository.findById(prod_plan);
    if (!prodPlanExists) {
      throw new AppError('Could not find any production Plan with the given id !!!');
    }

    const modelExists = await modelRepository.findById(model);
    if (!modelExists) {
      throw new AppError('Could not find any production Plan with the given id !!!');
    }

    const productionDetail = productionDetailRepository.create({
      entry_date,
      departure_date,
      production_sheet,
      number_pairs,
      billed,
      billed_date,
      payment_date,
      team: existsTeams,
      prod_plan: prodPlanExists,
      model: modelExists,
    });

    await productionDetailRepository.save(productionDetail);
    return productionDetail;
  }
}
