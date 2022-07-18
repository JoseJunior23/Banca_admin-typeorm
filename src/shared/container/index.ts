import { IEmployeeRepository } from '@modules/employees/domain/repositories/IEmployeeRepository';
import { EmployeeRepository } from '@modules/employees/infra/typeorm/repositories/EmployeeRepository';
import { IFactoryRepository } from '@modules/factory/domain/repositories/IFactoryRepository';
import { FactoryRepository } from '@modules/factory/infra/typeorm/repositories/FactoryRepository';
import { IPlanInfoRepository } from '@modules/plans/planInfo/domain/repositories/IPlanInfoRepository';
import { PlanInfoRepository } from '@modules/plans/planInfo/infra/typeorm/repositories/PlanInfoRepository';
import { IShoesModelRepository } from '@modules/shoesModel/domain/repositories/IShoesModelRepository';
import { ShoesModelRepository } from '@modules/shoesModel/infra/typeorm/repositories/ShoesModelRepostories';
import { ITeamsRepository } from '@modules/teams/domain/repositories/ITeamsRepository';
import { TeamsRepository } from '@modules/teams/infra/typeorm/repositories/TeamsRepository';
import { IWorkSessionsRepository } from '@modules/workSessions/domain/repositories/IWorkSessionsRepository';
import { WorkSessionsRepository } from '@modules/workSessions/infra/typeorm/repositories/WorkSessionsRepository';
import { container } from 'tsyringe';

container.registerSingleton<IWorkSessionsRepository>(
  'WorkSessionsRepository',
  WorkSessionsRepository,
);

container.registerSingleton<IEmployeeRepository>('EmployeeRepository', EmployeeRepository);

container.registerSingleton<ITeamsRepository>('TeamsRepository', TeamsRepository);

container.registerSingleton<IFactoryRepository>('FactoryRepository', FactoryRepository);

container.registerSingleton<IShoesModelRepository>('ShoesModelRepository', ShoesModelRepository);

container.registerSingleton<IPlanInfoRepository>('PlanInfoRepository', PlanInfoRepository);
