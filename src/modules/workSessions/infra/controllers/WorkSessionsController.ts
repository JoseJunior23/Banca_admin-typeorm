import { CreateWorkSessionsService } from '@modules/workSessions/services/CreateWorkSessionsService';
import { DeleteWorkSessionsService } from '@modules/workSessions/services/DeleteworkSessionsService';
import { ListWorkSessionsService } from '@modules/workSessions/services/ListWorkSessionsService';
import { ShowWorkSessionsService } from '@modules/workSessions/services/ShowWorkSessionsService';
import { UpdateWorkSessionsService } from '@modules/workSessions/services/UpdateWorkSessionsService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class WorkSessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const createWorkSessions = container.resolve(CreateWorkSessionsService);
    const workSessions = await createWorkSessions.execute({
      name,
      description,
    });

    return response.json(workSessions);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listWorkSessions = container.resolve(ListWorkSessionsService);
    const workSessions = await listWorkSessions.execute();

    return response.json(workSessions);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showWorkSession = container.resolve(ShowWorkSessionsService);
    const workSession = await showWorkSession.execute({ id });
    return response.json(workSession);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description } = request.body;
    const updateWorkSession = container.resolve(UpdateWorkSessionsService);

    const workSessions = await updateWorkSession.execute({
      id,
      name,
      description,
    });

    return response.json(workSessions);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteWorkSession = container.resolve(DeleteWorkSessionsService);

    await deleteWorkSession.execute({ id });
    return response.status(200).json({ message: 'Successfully deleted work session 👍' });
  }
}
