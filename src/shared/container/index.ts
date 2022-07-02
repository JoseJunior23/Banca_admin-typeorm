import { IEmployeeRepository } from '@modules/employees/domain/repositories/IEmployeeRepository';
import { EmployeeRepository } from '@modules/employees/infra/typeorm/repositories/EmployeeRepository';
import { IWorkSessionsRepository } from '@modules/workSessions/domain/repositories/IWorkSessionsRepository';
import { WorkSessionsRepository } from '@modules/workSessions/infra/typeorm/repositories/WorkSessionsRepository';
import { container } from 'tsyringe';

container.registerSingleton<IWorkSessionsRepository>(
  'WorkSessionsRepository',
  WorkSessionsRepository,
);

container.registerSingleton<IEmployeeRepository>('EmployeeRepository', EmployeeRepository);
