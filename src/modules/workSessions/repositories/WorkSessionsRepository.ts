import { EntityRepository, Repository } from 'typeorm';
import { WorkSessions } from '../entities/WorkSessions';

@EntityRepository(WorkSessions)
export class WorkSessionsRepository extends Repository<WorkSessions> {}
