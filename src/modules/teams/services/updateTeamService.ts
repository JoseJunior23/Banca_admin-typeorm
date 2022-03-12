import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Teams } from '../entities/Teams';
import { TeamsRepository } from '../repositories/TeamsRepository';

interface ITeam {
  id: string;
  name: string;
  description: string;
}

export class UpdateTeamService {
  public async execute({ id, name, description }: ITeam): Promise<Teams> {
    const teamRepository = getCustomRepository(TeamsRepository);

    const team = await teamRepository.findById(id);
    if (!team) {
      throw new AppError('Team not found !!!');
    }

    team.name = name;
    team.description = description;

    await teamRepository.save(team);
    return team;
  }
}
