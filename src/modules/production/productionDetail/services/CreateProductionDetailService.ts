import { TeamsRepository } from '@modules/teams/repositories/TeamsRepository';
import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ProductionDetail } from '../entities/ProductionDetail';
import { ProductionDetailRepository } from '../repositories/ProductionDetailRepository';

interface ITeams {
  name: string;
  description: string;
}

interface IProductionDetail {
  entry_date: Date;
  departure_date: Date;
  production_sheet: number;
  number_pairs: number;
  billed: number;
  billed_date: number;
  payment_date: Date;
  team: ITeams[];
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
  }: IProductionDetail): Promise<ProductionDetail> {
    const productionDetailRepository = getCustomRepository(ProductionDetailRepository);
    const teamRepository = getCustomRepository(TeamsRepository);

    const ProductionExists = await productionDetailRepository.ProductionSheet(production_sheet);
    if (ProductionExists) {
      throw new AppError('There is a production sheet with this number !!!');
    }

    const teamExists = await teamRepository.findByIds(team);
    if (!teamExists) {
      throw new AppError('Could not find any team with the given id');
    }

    const productionDetail = productionDetailRepository.create({
      entry_date,
      departure_date,
      production_sheet,
      number_pairs,
      billed,
      billed_date,
      payment_date,
    });

    await productionDetailRepository.save(productionDetail);
    return productionDetail;
  }
}
