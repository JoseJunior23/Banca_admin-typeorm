import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IWorkSessionsId } from '../domain/models/IWorkSessionsId';
import { IWorkSessionsRepository } from '../domain/repositories/IWorkSessionsRepository';
import { WorkSessions } from '../infra/typeorm/entities/WorkSessions';

@injectable()
export class ShowWorkSessionsService {
  constructor(
    @inject('WorkSessionsRepository')
    private workSessionsRepository: IWorkSessionsRepository,
  ) {}

  public async execute({ id }: IWorkSessionsId): Promise<WorkSessions> {
    const workSession = await this.workSessionsRepository.findById(id);
    if (!workSession) {
      throw new AppError('Work session not found !!!');
    }

    return workSession;
  }
}
