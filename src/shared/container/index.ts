import { IWorkSessionsRepository } from '@modules/workSessions/domain/repositories/IWorkSessionsRepository';
import { WorkSessionsRepository } from '@modules/workSessions/infra/typeorm/repositories/WorkSessionsRepository';
import { container } from 'tsyringe';

container.registerSingleton<IWorkSessionsRepository>(
  'WorkSessionsRepository',
  WorkSessionsRepository,
);
