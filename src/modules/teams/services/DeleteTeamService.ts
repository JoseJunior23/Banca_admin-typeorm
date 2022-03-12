import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { TeamsRepository } from '../repositories/TeamsRepository';

interface ITeam {
  id: string;
}

export class DeleteTeamService {
  public async execute({ id }: ITeam) {
    const teamRepository = getCustomRepository(TeamsRepository);

    const team = await teamRepository.findById(id);
    if (!team) {
      throw new AppError('Team not found !!!');
    }

    await teamRepository.remove(team);
  }
}
