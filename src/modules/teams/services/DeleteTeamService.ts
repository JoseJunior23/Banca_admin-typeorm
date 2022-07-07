import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ITeamsId } from '../domain/models/ITeamsId';
import { ITeamsRepository } from '../domain/repositories/ITeamsRepository';

@injectable()
export class DeleteTeamService {
  constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository,
  ) {}

  public async execute({ id }: ITeamsId) {
    const team = await this.teamsRepository.findById(id);
    if (!team) {
      throw new AppError('Team not found !!!');
    }
    await this.teamsRepository.remove(team);
  }
}
