import { Request, Response } from 'express';
import { CreateWorkSessionsService } from '../services/CreateWorkSessionsService';
import { ListWorkSessionsService } from '../services/ListWorkSessionsService';
import { UpdateWorkSessionsService } from '../services/UpdateWorkSessionsService';

export class WorkSessionsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listWorkSessions = new ListWorkSessionsService();
    const workSessions = await listWorkSessions.execute();

    return response.json(workSessions);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const createWorkSessions = new CreateWorkSessionsService();
    const workSessions = await createWorkSessions.execute({
      name,
      description,
    });

    return response.json(workSessions);
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
}
