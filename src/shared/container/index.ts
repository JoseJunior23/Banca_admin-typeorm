import { IEmployeeRepository } from '@modules/employees/domain/repositories/IEmployeeRepository';
import { EmployeeRepository } from '@modules/employees/infra/typeorm/repositories/EmployeeRepository';
import { IFactoryRepository } from '@modules/factory/domain/repositories/IFactoryRepository';
import { FactoryRepository } from '@modules/factory/infra/typeorm/repositories/FactoryRepository';
import { IPlanDetailRepository } from '@modules/plans/planDetail/domain/repositories/IPlandetailRepository';
import { PlanDetailRepository } from '@modules/plans/planDetail/infra/typeorm/repositories/PlanDetailRepository';
import { IPlanInfoRepository } from '@modules/plans/planInfo/domain/repositories/IPlanInfoRepository';
import { PlanInfoRepository } from '@modules/plans/planInfo/infra/typeorm/repositories/PlanInfoRepository';
import { IShoesModelRepository } from '@modules/shoesModel/domain/repositories/IShoesModelRepository';
import { ShoesModelRepository } from '@modules/shoesModel/infra/typeorm/repositories/ShoesModelRepostories';
import { ITeamsEmployeeRepository } from '@modules/teams/domain/repositories/ITeamsEmployeeRepository';
import { ITeamsRepository } from '@modules/teams/domain/repositories/ITeamsRepository';
import { TeamEmployeesRepository } from '@modules/teams/infra/typeorm/repositories/TeamEmployeesRepository';
import { TeamsRepository } from '@modules/teams/infra/typeorm/repositories/TeamsRepository';
import { IWorkSectionRepository } from '@modules/workSections/domain/repositories/IWorkSectionRepository';
import { WorkSectionRepository } from '@modules/workSections/infra/typeorm/repositories/WorkSessionsRepository';
import { container } from 'tsyringe';

container.registerSingleton<IWorkSectionRepository>('WorkSectionRepository', WorkSectionRepository);

container.registerSingleton<IEmployeeRepository>('EmployeeRepository', EmployeeRepository);

container.registerSingleton<ITeamsRepository>('TeamsRepository', TeamsRepository);

container.registerSingleton<ITeamsEmployeeRepository>(
  'TeamEmployeeRepository',
  TeamEmployeesRepository,
);

container.registerSingleton<IFactoryRepository>('FactoryRepository', FactoryRepository);

container.registerSingleton<IShoesModelRepository>('ShoesModelRepository', ShoesModelRepository);

container.registerSingleton<IPlanInfoRepository>('PlanInfoRepository', PlanInfoRepository);

container.registerSingleton<IPlanDetailRepository>('PlanDetailRepository', PlanDetailRepository);
