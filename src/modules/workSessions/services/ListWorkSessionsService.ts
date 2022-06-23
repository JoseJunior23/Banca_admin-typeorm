import { inject, injectable } from 'tsyringe';
import { IWorkSessionsRepository } from '../domain/repositories/IWorkSessionsRepository';
import { WorkSessions } from '../infra/typeorm/entities/WorkSessions';

@injectable()
export class ListWorkSessionsService {
  constructor(
    @inject('WorkSessionsRepository')
    private workSessionsRepository: IWorkSessionsRepository,
  ) {}

  public async execute(): Promise<WorkSessions[]> {
    const workSessions = await this.workSessionsRepository.findAll();
    return workSessions;
  }
}
