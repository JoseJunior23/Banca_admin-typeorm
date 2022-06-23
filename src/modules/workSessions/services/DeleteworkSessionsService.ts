import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IWorkSessionsId } from '../domain/models/IWorkSessionsId';
import { IWorkSessionsRepository } from '../domain/repositories/IWorkSessionsRepository';

@injectable()
export class DeleteWorkSessionsService {
  constructor(
    @inject('WorkSessionsRepository')
    private workSessionsRepository: IWorkSessionsRepository,
  ) {}

  public async execute({ id }: IWorkSessionsId): Promise<void> {
    const workSessions = await this.workSessionsRepository.findById(id);
    if (!workSessions) {
      throw new AppError('Work session not found !!!');
    }

    await this.workSessionsRepository.remove(workSessions);
  }
}
