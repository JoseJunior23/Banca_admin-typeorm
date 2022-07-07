import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IUpdateWorkSession } from '../domain/models/IUpdateWorkSessions';
import { IWorkSession } from '../domain/models/IworkSessions';
import { IWorkSessionsRepository } from '../domain/repositories/IWorkSessionsRepository';

@injectable()
export class UpdateWorkSessionsService {
  constructor(
    @inject('WorkSessionsRepository')
    private workSessionsRepository: IWorkSessionsRepository,
  ) {}

  public async execute({ id, name, description }: IUpdateWorkSession): Promise<IWorkSession> {
    const workSessions = await this.workSessionsRepository.findById(id);
    if (!workSessions) {
      throw new AppError('Work session not found !!!');
    }

    workSessions.name = name;
    workSessions.description = description;

    await this.workSessionsRepository.save(workSessions);

    return workSessions;
  }
}
