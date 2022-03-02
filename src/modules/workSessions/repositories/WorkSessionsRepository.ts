import { EntityRepository, Repository } from 'typeorm';
import { WorkSessions } from '../entities/WorkSessions';

@EntityRepository(WorkSessions)
export class WorkSessionsRepository extends Repository<WorkSessions> {
  public async findById(id: string): Promise<WorkSessions | undefined> {
    const workSessions = await this.findOne({
      where: {
        id,
      },
    });
    return workSessions;
  }

  public async findByName(name: string): Promise<WorkSessions | undefined> {
    const workSessions = await this.findOne({
      where: {
        name,
      },
    });
    return workSessions;
  }
}
