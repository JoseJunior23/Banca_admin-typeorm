import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ProductionDetail } from '../entities/ProductionDetail';
import { ProductionDetailRepository } from '../repositories/ProductionDetailRepository';

interface IProductionDetail {
  id: string;
  entry_date: Date;
  departure_date: Date;
  production_sheet: number;
  number_pairs: number;
  billing: number;
  billing_date: Date;
  payday: Date;
}

export class UpdateProductionDetailService {
  public async execute({
    id,
    entry_date,
    departure_date,
    production_sheet,
    number_pairs,
    billing,
    billing_date,
    payday,
  }: IProductionDetail): Promise<ProductionDetail> {
    const productionDetailRepository = getCustomRepository(ProductionDetailRepository);

    const productionDetail = await productionDetailRepository.FindById(id);
    if (!productionDetail) {
      throw new AppError('Production detail not found !!!');
    }

    productionDetail.entry_date = entry_date;
    productionDetail.departure_date = departure_date;
    productionDetail.production_sheet = production_sheet;
    productionDetail.number_pairs = number_pairs;
    productionDetail.billing = billing;
    productionDetail.billing_date = billing_date;
    productionDetail.payday = payday;

    await productionDetailRepository.save(productionDetail);
    return productionDetail;
  }
}
