import { getCustomRepository } from 'typeorm';
import { Teams } from '../entities/Teams';
import { TeamsRepository } from '../repositories/TeamsRepository';

export class ListTeamsService {
  public async execute(): Promise<Teams[]> {
    const teamsRepository = getCustomRepository(TeamsRepository);

    const team = await teamsRepository.find();

    return team;
  }
}
