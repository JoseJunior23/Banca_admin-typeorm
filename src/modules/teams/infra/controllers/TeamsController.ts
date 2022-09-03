import { CreateTeamsService } from '@modules/teams/services/CreateTeamsService';
import { DeleteTeamService } from '@modules/teams/services/DeleteTeamService';
import { ListTeamsService } from '@modules/teams/services/ListTeamsService';
import { UpdateTeamService } from '@modules/teams/services/UpdateTeamService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class TeamController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description, employees } = request.body;
    const createTeam = container.resolve(CreateTeamsService);
    const team = await createTeam.execute({
      name,
      description,
      employees,
    });
    return response.json(team);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listTeam = container.resolve(ListTeamsService);
    const team = await listTeam.execute();
    return response.json(team);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description } = request.body;
    const updateTeam = container.resolve(UpdateTeamService);
    const team = await updateTeam.execute({
      id,
      name,
      description,
    });
    return response.json(team);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;
    const deleteTeam = container.resolve(DeleteTeamService);
    await deleteTeam.execute({ id });
    return response.status(200).json({ message: 'Successfully deleted team 👍' });
  }
}
