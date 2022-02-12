import { Request, Response } from 'express';
import { createSessionsService } from '../services/CreateSessionsService';

export class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const createSession = new createSessionsService();

    const user = await createSession.execute({
      email,
      password,
    });

    return response.json(user);
  }
}
