import { Request, Response } from 'express';
import { CreateProductionDetailService } from '../services/CreateProductionDetailService';
import { DeleteProductionDetailService } from '../services/DeleteProductionDetailService';
import { ListProductionDetailService } from '../services/ListProductionDetailService';
import { ShowProductionDetailService } from '../services/ShowProductionDetailService';
import { UpdateProductionDetailService } from '../services/UpdateProductionDetailService';

export class ProductionDetailController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      entry_date,
      departure_date,
      production_sheet,
      number_pairs,
      billing,
      billing_date,
      payday,
    } = request.body;

    const createProductionDetail = new CreateProductionDetailService();
    const productionDetail = await createProductionDetail.execute({
      entry_date,
      departure_date,
      production_sheet,
      number_pairs,
      billing,
      billing_date,
      payday,
    });
    return response.json(productionDetail);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const indexProductionDetail = new ListProductionDetailService();
    const productionDetail = await indexProductionDetail.execute();
    return response.json(productionDetail);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showProductionDetail = new ShowProductionDetailService();
    const productionDetail = await showProductionDetail.execute({ id });
    return response.json(productionDetail);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {
      entry_date,
      departure_date,
      production_sheet,
      number_pairs,
      billing,
      billing_date,
      payday,
    } = request.body;

    const updateProductionDetail = new UpdateProductionDetailService();

    const productionDetail = await updateProductionDetail.execute({
      id,
      entry_date,
      departure_date,
      production_sheet,
      number_pairs,
      billing,
      billing_date,
      payday,
    });
    return response.json(productionDetail);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;
    const deleteProductionDetail = new DeleteProductionDetailService();
    await deleteProductionDetail.execute({ id });
    return response.status(200).json({ message: 'Successfully deleted production detail 👍' });
  }
}
