import { Request, Response } from 'express';
import { CreateWorkSessionsService } from '../services/CreateWorkSessionsService';
import { ListWorkSessionsService } from '../services/ListWorkSessionsService';

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
}
