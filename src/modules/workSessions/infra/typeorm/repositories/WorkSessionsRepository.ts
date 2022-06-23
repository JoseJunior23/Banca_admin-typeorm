import { ICreateWorkSession } from '@modules/workSessions/domain/models/ICreateWorkSession';
import { IWorkSessionsRepository } from '@modules/workSessions/domain/repositories/IWorkSessionsRepository';
import { dataSource } from '@shared/infra/typeorm/connection';
import { Repository } from 'typeorm';
import { WorkSessions } from '../entities/WorkSessions';

export class WorkSessionsRepository implements IWorkSessionsRepository {
  private ormRepository: Repository<WorkSessions>;
  constructor() {
    this.ormRepository = dataSource.getRepository(WorkSessions);
  }

  public async create({ name, description }: ICreateWorkSession): Promise<WorkSessions> {
    const workSession = this.ormRepository.create({ name, description });
    await this.ormRepository.save(workSession);
    return workSession;
  }

  public async save(workSessions: WorkSessions): Promise<WorkSessions> {
    await this.ormRepository.save(workSessions);
    return workSessions;
  }

  public async findAll(): Promise<WorkSessions[]> {
    const workSessions = await this.ormRepository.find();
    return workSessions;
  }

  public async remove(workSessions: WorkSessions): Promise<void> {
    await this.ormRepository.remove(workSessions);
  }

  public async findById(id: string): Promise<WorkSessions | null> {
    const workSessions = await this.ormRepository.findOneBy({ id });
    return workSessions;
  }

  public async findByName(name: string): Promise<WorkSessions | null> {
    const workSessions = await this.ormRepository.findOneBy({ name });
    return workSessions;
  }
}
