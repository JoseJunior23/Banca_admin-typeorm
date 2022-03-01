import { getCustomRepository } from 'typeorm';
import { WorkSessions } from '../entities/WorkSessions';
import { WorkSessionsRepository } from '../repositories/WorkSessionsRepository';

export class ListWorkSessionsService {
  public async execute(): Promise<WorkSessions[]> {
    const workSessionsRepository = getCustomRepository(WorkSessionsRepository);
    const workSessions = await workSessionsRepository.find();
    return workSessions;
  }
}
