import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { WorkSessionsRepository } from '../repositories/WorkSessionsRepository';

interface IWorkSessions {
  id: string;
}

export class DeleteWorkSessionsService {
  public async execute({ id }: IWorkSessions): Promise<void> {
    const workSessionsRepository = getCustomRepository(WorkSessionsRepository);

    const workSessions = await workSessionsRepository.findById(id);
    if (!workSessions) {
      throw new AppError('Work session not found !!!');
    }

    await workSessionsRepository.remove(workSessions);
  }
}
