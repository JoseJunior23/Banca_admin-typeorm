import { Request, Response } from 'express';
import { PermissionService } from '../services/PermissionService';

export class PermissionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const createPermission = new PermissionService();

    const permission = await createPermission.execute({
      name,
      description,
    });

    return response.json(permission);
  }
}
