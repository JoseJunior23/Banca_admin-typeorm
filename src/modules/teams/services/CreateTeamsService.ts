import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Teams } from '../entities/Teams';
import { TeamsRepository } from '../repositories/TeamsRepository';

interface ITeam {
  name: string;
  description: string;
}

export class CreateTeamsService {
  public async execute({ name, description }: ITeam): Promise<Teams> {
    const teamRepository = getCustomRepository(TeamsRepository);

    const teamExists = await teamRepository.findByName(name);
    if (teamExists) {
      throw new AppError('There is a team registered with this name !!!');
    }

    const teams = teamRepository.create({
      name,
      description,
    });

    await teamRepository.save(teams);
    return teams;
  }
}
