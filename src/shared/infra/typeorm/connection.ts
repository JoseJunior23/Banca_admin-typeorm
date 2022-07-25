import { Employee } from '@modules/employees/infra/typeorm/entities/Employee';
import { Factory } from '@modules/factory/infra/typeorm/entities/Factory';
import { PlanDetail } from '@modules/plans/planDetail/infra/typeorm/entities/PlanDetail';
import { PlanInfo } from '@modules/plans/planInfo/infra/typeorm/entities/PlanInfo';
import { ShoesModel } from '@modules/shoesModel/infra/typeorm/entities/ShoesModel';
import { Teams } from '@modules/teams/infra/typeorm/entities/Teams';
import { WorkSessions } from '@modules/workSessions/infra/typeorm/entities/WorkSessions';

import { DataSource } from 'typeorm';

import { CreateWorkSession1646092650188 } from './migrations/1646092650188-CreateWorkSession';
import { CreateTeams1646958469701 } from './migrations/1646958469701-CreateTeams';
import { CreateEmployeeTeams1647303210741 } from './migrations/1647303210741-CreateEmployeeTeams';
import { CreatePlanInfo1647385966340 } from './migrations/1647385966340-CreatePlanInfo';
import { CreatePlanDetail1647483310364 } from './migrations/1647483310364-CreatePlanDetail';
import { CreateFactory1647562966675 } from './migrations/1647562966675-CreateFactory';
import { CreateShoesModel1648166135123 } from './migrations/1648166135123-CreateShoesModel';
import { CreateAddFactoryModel1648506235426 } from './migrations/1648506235426-CreateAddFactoryModel';
import { CreateAddFactoryPlanInfo1648509080827 } from './migrations/1648509080827-CreateAddFactoryPlanInfo';
import { CreateAddPlanInfoPlanDetail1648510244495 } from './migrations/1648510244495-CreateAddPlanInfoPlanDetail';
import { CreateAddPlanDetailModel1648510904722 } from './migrations/1648510904722-CreateAddPlanDetailModel';
import { CreateAddPlanDetailTeams1648511621355 } from './migrations/1648511621355-CreateAddPlanDetailTeams';
import { CreateEmployee1656871061048 } from './migrations/1656871061048-CreateEmployee';
import { CreateAddEmployeeIdEmployeeTeam1658706212133 } from './migrations/1658706212133-CreateAddEmployeeIdEmployeeTeam';
import { CreateAddTeamIdEmployeeTeam1658706535265 } from './migrations/1658706535265-CreateAddTeamIdEmployeeTeam';
import { CreateAddWorkSessionEmployee1658707744327 } from './migrations/1658707744327-CreateAddWorkSessionEmployee';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'teste',
  password: 'teste',
  database: 'bancaAdmin',
  entities: [WorkSessions, Employee, Teams, Factory, ShoesModel, PlanInfo, PlanDetail],
  migrations: [
    CreateAddFactoryModel1648506235426,
    CreateAddFactoryPlanInfo1648509080827,
    CreateAddPlanDetailModel1648510904722,
    CreateAddPlanDetailTeams1648511621355,
    CreateAddPlanInfoPlanDetail1648510244495,
    CreateEmployeeTeams1647303210741,
    CreateFactory1647562966675,
    CreatePlanDetail1647483310364,
    CreatePlanInfo1647385966340,
    CreateShoesModel1648166135123,
    CreateTeams1646958469701,
    // CreateUsers1644534984010,
    // CreateUserTokens1644972400015,
    CreateWorkSession1646092650188,
    CreateEmployee1656871061048,
    CreateAddEmployeeIdEmployeeTeam1658706212133,
    CreateAddTeamIdEmployeeTeam1658706535265,
    CreateAddWorkSessionEmployee1658707744327,
  ],
});
