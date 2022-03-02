import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { WorkSessions } from '../entities/WorkSessions';
import { WorkSessionsRepository } from '../repositories/WorkSessionsRepository';

interface IWorkSessions {
  name: string;
  description?: string;
}

export class CreateWorkSessionsService {
  public async execute({
    name,
    description,
  }: IWorkSessions): Promise<WorkSessions> {
    const workSessionsRepository = getCustomRepository(WorkSessionsRepository);

    const workSessionsExists = await workSessionsRepository.findByName(name);
    if (workSessionsExists) {
      throw new AppError('There is already a work session with this name !!!');
    }

    const workSessions = workSessionsRepository.create({
      name,
      description,
    });

    await workSessionsRepository.save(workSessions);
    return workSessions;
  }
}
