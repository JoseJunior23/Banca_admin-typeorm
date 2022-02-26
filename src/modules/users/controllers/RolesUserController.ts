import { Request, Response } from 'express';
import { RolesUserService } from '../services/RolesUserService';

export class RolesUserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const createRole = new RolesUserService();

    const role = await createRole.execute({
      name,
      description,
    });

    return response.json(role);
  }
}
