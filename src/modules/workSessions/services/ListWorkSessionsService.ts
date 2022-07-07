import { inject, injectable } from 'tsyringe';
import { IWorkSession } from '../domain/models/IworkSessions';
import { IWorkSessionsRepository } from '../domain/repositories/IWorkSessionsRepository';

@injectable()
export class ListWorkSessionsService {
  constructor(
    @inject('WorkSessionsRepository')
    private workSessionsRepository: IWorkSessionsRepository,
  ) {}

  public async execute(): Promise<IWorkSession[]> {
    const workSessions = await this.workSessionsRepository.findAll();
    return workSessions;
  }
}
