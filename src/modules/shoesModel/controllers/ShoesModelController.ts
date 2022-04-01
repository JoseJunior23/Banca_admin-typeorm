import { Request, Response } from 'express';
import { CreateShoesModelService } from '../services/CreateShoesModelService';
import { DeleteShoesModelService } from '../services/DeleteShoesModelService';
import { ListShoesModelService } from '../services/ListShoesModelService';
import { ShowShoesModelService } from '../services/ShowShoesModelService';
import { UpdateShoesModelService } from '../services/UpdateShoesModelService';

export class ShoesModelController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      reference,
      description,
      price_pairs_shoes,
      price_pespontador,
      price_coladeira,
      factory,
    } = request.body;

    const createShoesModel = new CreateShoesModelService();
    const shoesModel = await createShoesModel.execute({
      reference,
      description,
      price_pairs_shoes,
      price_pespontador,
      price_coladeira,
      factory,
    });

    return response.json(shoesModel);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const indexShoesModel = new ListShoesModelService();

    const shoesModel = await indexShoesModel.execute();
    return response.json(shoesModel);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showShoesModel = new ShowShoesModelService();

    const shoesModel = await showShoesModel.execute({ id });

    return response.json(shoesModel);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { reference, description, price_pairs_shoes, price_pespontador, price_coladeira } =
      request.body;

    const { id } = request.params;

    const updateShoesModel = new UpdateShoesModelService();
    const shoesModel = await updateShoesModel.execute({
      id,
      reference,
      description,
      price_coladeira,
      price_pairs_shoes,
      price_pespontador,
    });
    return response.json(shoesModel);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteShoesModel = new DeleteShoesModelService();

    await deleteShoesModel.execute({ id });
    return response.status(200).json({ message: 'Successfully deleted shoes model 👍' });
  }
}
