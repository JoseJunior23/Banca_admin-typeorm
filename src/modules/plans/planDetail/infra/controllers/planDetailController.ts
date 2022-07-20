import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreatePlanDetailService } from '../../services/CreatePlanDetailService';
import { DeletePlanDetailService } from '../../services/DeletePlanDetailService';
import { ListPlanDetailService } from '../../services/ListPlanDetailService';
import { ShowPlanDetailService } from '../../services/ShowPlanDetailService';
import { UpdatePlanDetailService } from '../../services/UpdatePlanDetailService';

export class PlanDetailController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
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
    } = request.body;

    const createPlanDetail = container.resolve(CreatePlanDetailService);
    const planDetail = await createPlanDetail.execute({
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
    });
    return response.json(planDetail);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const indexPlanDetail = container.resolve(ListPlanDetailService);
    const planDetail = await indexPlanDetail.execute();
    return response.json(planDetail);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showPlanDetail = container.resolve(ShowPlanDetailService);
    const planDetail = await showPlanDetail.execute({ id });
    return response.json(planDetail);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {
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
    } = request.body;

    const updatePlanDetail = container.resolve(UpdatePlanDetailService);

    const planDetail = await updatePlanDetail.execute({
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
    });
    return response.json(planDetail);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;
    const deletePlanDetail = container.resolve(DeletePlanDetailService);
    await deletePlanDetail.execute({ id });
    return response.status(200).json({ message: 'Successfully deleted plan detail 👍' });
  }
}
