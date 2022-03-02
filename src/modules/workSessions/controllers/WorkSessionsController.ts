import { Request, Response } from 'express';
import { CreateWorkSessionsService } from '../services/CreateWorkSessionsService';
import { DeleteWorkSessionsService } from '../services/DeleteworkSessionsService';
import { ListWorkSessionsService } from '../services/ListWorkSessionsService';
import { ShowWorkSessionsService } from '../services/ShowWorkSessionsService';
import { UpdateWorkSessionsService } from '../services/UpdateWorkSessionsService';

export class WorkSessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const createWorkSessions = new CreateWorkSessionsService();
    const workSessions = await createWorkSessions.execute({
      name,
      description,
    });

    return response.json(workSessions);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listWorkSessions = new ListWorkSessionsService();
    const workSessions = await listWorkSessions.execute();

    return response.json(workSessions);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showWorkSession = new ShowWorkSessionsService();
    const workSession = await showWorkSession.execute({ id });
    return response.json(workSession);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description } = request.body;
    const updateWorkSession = new UpdateWorkSessionsService();

    const workSessions = await updateWorkSession.execute({
      id,
      name,
      description,
    });

    return response.json(workSessions);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteWorkSession = new DeleteWorkSessionsService();

    await deleteWorkSession.execute({ id });
    return response
      .status(200)
      .json({ message: 'Successfully deleted work session 👍' });
  }
}
