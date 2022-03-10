import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { WorkSessions } from '../entities/WorkSessions';
import { WorkSessionsRepository } from '../repositories/WorkSessionsRepository';

interface IWorkSessions {
  id: string;
  name: string;
  description: string;
}
export class UpdateWorkSessionsService {
  public async execute({ id, name, description }: IWorkSessions): Promise<WorkSessions> {
    const updateWorkSessionsRepository = getCustomRepository(WorkSessionsRepository);

    const workSessions = await updateWorkSessionsRepository.findById(id);
    if (!workSessions) {
      throw new AppError('Work session not found !!!');
    }

    workSessions.name = name;
    workSessions.description = description;

    await updateWorkSessionsRepository.save(workSessions);

    return workSessions;
  }
}
