import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IWorkSession } from '../domain/models/IworkSessions';
import { IWorkSessionsId } from '../domain/models/IWorkSessionsId';
import { IWorkSessionsRepository } from '../domain/repositories/IWorkSessionsRepository';

@injectable()
export class ShowWorkSessionsService {
  constructor(
    @inject('WorkSessionsRepository')
    private workSessionsRepository: IWorkSessionsRepository,
  ) {}

  public async execute({ id }: IWorkSessionsId): Promise<IWorkSession> {
    const workSession = await this.workSessionsRepository.findById(id);
    if (!workSession) {
      throw new AppError('Work session not found !!!');
    }

    return workSession;
  }
}
