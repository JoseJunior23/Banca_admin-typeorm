import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreatePlanInfoService } from '../../services/CreatePlanInfoService';
import { DeletePlanInfoService } from '../../services/DeletePlanInfoService';
import { ListPlanInfoService } from '../../services/ListPlanInfoService';
import { ShowPlanInfoService } from '../../services/ShowPlanInfoService';
import { UpdatePlanInfoService } from '../../services/UpdatePlanInfoService';

export class PlanInfoController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { variation, description, entry_date, factory_plan } = request.body;
    const createPlanInfo = container.resolve(CreatePlanInfoService);
    const planInfo = await createPlanInfo.execute({
      variation,
      description,
      entry_date,
      factory_plan,
    });
    return response.json(planInfo);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const indexPlanInfo = container.resolve(ListPlanInfoService);
    const planInfo = await indexPlanInfo.execute();
    return response.json(planInfo);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showPlanInfo = container.resolve(ShowPlanInfoService);
    const planInfo = await showPlanInfo.execute({ id });
    return response.json(planInfo);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { variation, description, entry_date, factory_plan } = request.body;
    const updatePlanInfo = container.resolve(UpdatePlanInfoService);
    const planInfo = await updatePlanInfo.execute({
      id,
      variation,
      description,
      entry_date,
      factory_plan,
    });
    return response.json(planInfo);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;
    const deletePlanInfo = container.resolve(DeletePlanInfoService);
    await deletePlanInfo.execute({ id });
    return response.status(200).json('{ message: Successfully deleted information plan 👍}');
  }
}
