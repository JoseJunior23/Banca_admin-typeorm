import { inject, injectable } from 'tsyringe';
import { ITeams } from '../domain/models/ITeams';
import { ITeamsRepository } from '../domain/repositories/ITeamsRepository';

@injectable()
export class ListTeamsService {
  constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository,
  ) {}

  public async execute(): Promise<ITeams[]> {
    const teams = await this.teamsRepository.findAll();
    return teams;
  }
}
