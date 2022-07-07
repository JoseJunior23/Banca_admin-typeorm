import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ITeams } from '../domain/models/ITeams';
import { ITeamsRepository } from '../domain/repositories/ITeamsRepository';

@injectable()
export class UpdateTeamService {
  constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository,
  ) {}

  public async execute({ id, name, description }: ITeams): Promise<ITeams> {
    const team = await this.teamsRepository.findById(id);
    if (!team) {
      throw new AppError('Team not found !!!');
    }

    team.name = name;
    team.description = description;

    await this.teamsRepository.save(team);
    return team;
  }
}
