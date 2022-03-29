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
  billed: number;
  billed_date: Date;
  payment_date: Date;
}

export class UpdateProductionDetailService {
  public async execute({
    id,
    entry_date,
    departure_date,
    production_sheet,
    number_pairs,
    billed,
    billed_date,
    payment_date,
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
    productionDetail.billed = billed;
    productionDetail.billed_date = billed_date;
    productionDetail.payment_date = payment_date;

    await productionDetailRepository.save(productionDetail);
    return productionDetail;
  }
}
