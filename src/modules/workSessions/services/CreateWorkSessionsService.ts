import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICreateWorkSession } from '../domain/models/ICreateWorkSession';
import { IWorkSession } from '../domain/models/IworkSessions';
import { IWorkSessionsRepository } from '../domain/repositories/IWorkSessionsRepository';

@injectable()
export class CreateWorkSessionsService {
  constructor(
    @inject('WorkSessionsRepository')
    private workSessionsRepository: IWorkSessionsRepository,
  ) {}

  public async execute({ name, description }: ICreateWorkSession): Promise<IWorkSession> {
    const workSessionsExists = await this.workSessionsRepository.findByName(name);
    if (workSessionsExists) {
      throw new AppError('There is already a work session with this name !!!');
    }

    const workSessions = this.workSessionsRepository.create({
      name,
      description,
    });
    return workSessions;
  }
}
