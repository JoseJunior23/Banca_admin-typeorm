import { Request, Response } from 'express';
import { CreateProductionPlanService } from '../services/CreateProductionPlanService';
import { DeleteProductionPlanService } from '../services/DeleteProductionPlanService';
import { ListProductionService } from '../services/ListProductionPlanService';
import { ShowProductionPlanService } from '../services/ShowProductionPlanService';
import { UpdateProductionPlanService } from '../services/UpdateProductionPlanService';

export class ProductionPlanController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { variation, description, entry_date, factory_plan } = request.body;

    const createProductionPlan = new CreateProductionPlanService();
    const productionPlan = await createProductionPlan.execute({
      variation,
      description,
      entry_date,
      factory_plan,
    });
    return response.json(productionPlan);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const indexProductionPlan = new ListProductionService();
    const productionPlan = await indexProductionPlan.execute();
    return response.json(productionPlan);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showProductionPlan = new ShowProductionPlanService();
    const productionPlan = await showProductionPlan.execute({ id });
    return response.json(productionPlan);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { variation, description, entry_date, factory_plan } = request.body;
    const updateProductionPlan = new UpdateProductionPlanService();
    const productionPlan = await updateProductionPlan.execute({
      id,
      variation,
      description,
      entry_date,
      factory_plan,
    });
    return response.json(productionPlan);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;
    const deleteProductionPlan = new DeleteProductionPlanService();
    await deleteProductionPlan.execute({ id });
    return response.status(200).json('{ message: Successfully deleted production Plan 👍}');
  }
}
