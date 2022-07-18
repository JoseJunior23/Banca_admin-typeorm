import { CreateShoesModelService } from '@modules/shoesModel/services/CreateShoesModelService';
import { DeleteShoesModelService } from '@modules/shoesModel/services/DeleteShoesModelService';
import { ListShoesModelService } from '@modules/shoesModel/services/ListShoesModelService';
import { ShowShoesModelService } from '@modules/shoesModel/services/ShowShoesModelService';
import { UpdateShoesModelService } from '@modules/shoesModel/services/UpdateShoesModelService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

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

    const createShoesModel = container.resolve(CreateShoesModelService);
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
    const indexShoesModel = container.resolve(ListShoesModelService);

    const shoesModel = await indexShoesModel.execute();
    return response.json(shoesModel);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showShoesModel = container.resolve(ShowShoesModelService);

    const shoesModel = await showShoesModel.execute({ id });

    return response.json(shoesModel);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const {
      reference,
      description,
      price_pairs_shoes,
      price_pespontador,
      price_coladeira,
      factory,
    } = request.body;

    const { id } = request.params;

    const updateShoesModel = container.resolve(UpdateShoesModelService);
    const shoesModel = await updateShoesModel.execute({
      id,
      reference,
      description,
      price_coladeira,
      price_pairs_shoes,
      price_pespontador,
      factory,
    });
    return response.json(shoesModel);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteShoesModel = container.resolve(DeleteShoesModelService);

    await deleteShoesModel.execute({ id });
    return response.status(200).json({ message: 'Successfully deleted shoes model 👍' });
  }
}
