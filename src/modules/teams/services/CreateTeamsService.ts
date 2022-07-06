import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICreateTeams } from '../domain/models/ICreateTeams';
import { ITeams } from '../domain/models/ITeams';
import { ITeamsRepository } from '../domain/repositories/ITeamsRepository';

@injectable()
export class CreateTeamsService {
  constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository,
  ) {}

  public async execute({ name, description }: ICreateTeams): Promise<ITeams> {
    const teamExists = await this.teamsRepository.findByName(name);
    if (teamExists) {
      throw new AppError('There is a team registered with this name !!!');
    }

    const teams = this.teamsRepository.create({
      name,
      description,
    });
    return teams;
  }
}
