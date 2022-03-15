import { Request, Response } from 'express';
import { CreateTeamsService } from '../services/CreateTeamsService';
import { DeleteTeamService } from '../services/DeleteTeamService';
import { ListTeamsService } from '../services/ListTeamsService';
import { UpdateTeamService } from '../services/updateTeamService';

export class TeamController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const createTeam = new CreateTeamsService();
    const team = await createTeam.execute({
      name,
      description,
    });
    return response.json(team);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listTeam = new ListTeamsService();
    const team = await listTeam.execute();
    return response.json(team);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description } = request.body;
    const updateTeam = new UpdateTeamService();
    const team = await updateTeam.execute({
      id,
      name,
      description,
    });
    return response.json(team);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;
    const deleteTeam = new DeleteTeamService();
    await deleteTeam.execute({ id });
    return response.status(200).json({ message: 'Successfully deleted team 👍' });
  }
}
