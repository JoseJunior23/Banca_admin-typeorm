import { CreateFactoryService } from '@modules/factory/services/CreateFactoryService';
import { DeleteFactoryService } from '@modules/factory/services/DeleteFactoryService';
import { ListFactoryService } from '@modules/factory/services/ListFactoryService';
import { ShowFactoryService } from '@modules/factory/services/ShowFactoryService';
import { UpdateFactoryService } from '@modules/factory/services/UpdateFactoryService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class FactoryController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { company_name, fantasy_name, phone } = request.body;

    const createFactory = container.resolve(CreateFactoryService);
    const factory = await createFactory.execute({
      company_name,
      fantasy_name,
      phone,
    });
    return response.json(factory);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listFactory = container.resolve(ListFactoryService);
    const factory = await listFactory.execute();
    return response.json(factory);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showFactory = container.resolve(ShowFactoryService);
    const factory = await showFactory.execute({
      id,
    });
    return response.json(factory);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { company_name, fantasy_name, phone } = request.body;

    const updateFactory = container.resolve(UpdateFactoryService);
    const factory = await updateFactory.execute({
      id,
      company_name,
      fantasy_name,
      phone,
    });
    return response.json(factory);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;
    const deleteFactory = container.resolve(DeleteFactoryService);
    await deleteFactory.execute({ id });
    return response.status(200).json({ message: 'Successfully deleted factory 👍' });
  }
}
