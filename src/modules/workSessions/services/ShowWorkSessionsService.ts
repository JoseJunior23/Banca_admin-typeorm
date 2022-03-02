import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { WorkSessions } from '../entities/WorkSessions';
import { WorkSessionsRepository } from '../repositories/WorkSessionsRepository';

interface IWorkSession {
  id: string;
}
export class ShowWorkSessionsService {
  public async execute({ id }: IWorkSession): Promise<WorkSessions> {
    const workSessionsRepository = getCustomRepository(WorkSessionsRepository);

    const workSession = await workSessionsRepository.findById(id);
    if (!workSession) {
      throw new AppError('Work session not found !!!');
    }

    return workSession;
  }
}
