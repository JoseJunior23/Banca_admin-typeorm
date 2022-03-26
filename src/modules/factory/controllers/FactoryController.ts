import { Request, response, Response } from 'express';
import { CreateFactoryService } from '../services/CreateFactoryService';
import { DeleteFactoryService } from '../services/DeleteFactoryService';
import { ListFactoryService } from '../services/ListFactoryService';
import { ShowFactoryService } from '../services/ShowFactoryService';
import { UpdateFactoryService } from '../services/UpdateFactoryService';

export class FactoryController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { corporate_name, fantasy_name, phone } = request.body;

    const createFactory = new CreateFactoryService();
    const factory = await createFactory.execute({
      corporate_name,
      fantasy_name,
      phone,
    });
    return response.json(factory);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listFactory = new ListFactoryService();
    const factory = await listFactory.execute();
    return response.json(factory);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showFactory = new ShowFactoryService();
    const factory = await showFactory.execute({
      id,
    });
    return response.json(factory);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { corporate_name, fantasy_name, phone } = request.body;

    const updateFactory = new UpdateFactoryService();
    const factory = await updateFactory.execute({
      id,
      corporate_name,
      fantasy_name,
      phone,
    });
    return response.json(factory);
  }

  public async delete(request: Request) {
    const { id } = request.params;
    const deleteFactory = new DeleteFactoryService();
    await deleteFactory.execute({ id });
    return response.status(200).json({ message: 'Successfully deleted factory 👍' });
  }
}
