import { CreateWorkSectionService } from '@modules/workSections/services/CreateWorkSectionService';
import { DeleteWorkSectionService } from '@modules/workSections/services/DeleteworkSectionService';
import { ListWorkSectionService } from '@modules/workSections/services/ListWorkSectionService';
import { ShowWorkSectionService } from '@modules/workSections/services/ShowWorkSectionService';
import { UpdateWorkSectionService } from '@modules/workSections/services/UpdateWorkSectionService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class WorkSectionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const createWorkSection = container.resolve(CreateWorkSectionService);
    const workSection = await createWorkSection.execute({
      name,
      description,
    });

    return response.json(workSection);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listWorkSection = container.resolve(ListWorkSectionService);
    const workSection = await listWorkSection.execute();

    return response.json(workSection);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showWorkSession = container.resolve(ShowWorkSectionService);
    const workSession = await showWorkSession.execute({ id });
    return response.json(workSession);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description } = request.body;
    const updateWorkSession = container.resolve(UpdateWorkSectionService);

    const workSection = await updateWorkSession.execute({
      id,
      name,
      description,
    });

    return response.json(workSection);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteWorkSession = container.resolve(DeleteWorkSectionService);

    await deleteWorkSession.execute({ id });
    return response.status(200).json({ message: 'Successfully deleted work section 👍' });
  }
}
