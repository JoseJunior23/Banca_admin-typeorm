import { Employee } from '@modules/employees/infra/typeorm/entities/Employee';
import { Factory } from '@modules/factory/infra/typeorm/entities/Factory';
import { PlanInfo } from '@modules/plans/planInfo/infra/typeorm/entities/PlanInfo';
import { ShoesModel } from '@modules/shoesModel/infra/typeorm/entities/ShoesModel';
import { Teams } from '@modules/teams/infra/typeorm/entities/Teams';
import { WorkSessions } from '@modules/workSessions/infra/typeorm/entities/WorkSessions';

import { DataSource } from 'typeorm';

import { CreateWorkSession1646092650188 } from './migrations/1646092650188-CreateWorkSession';
import { CreateAddWorkSessionEmployee1646434774918 } from './migrations/1646434774918-CreateAddWorkSessionEmployee';
import { CreateTeams1646958469701 } from './migrations/1646958469701-CreateTeams';
import { CreateEmployeeTeams1647303210741 } from './migrations/1647303210741-CreateEmployeeTeams';
import { CreatePlanInfo1647385966340 } from './migrations/1647385966340-CreatePlanInfo';
import { CreateFactory1647562966675 } from './migrations/1647562966675-CreateFactory';
import { CreateShoesModel1648166135123 } from './migrations/1648166135123-CreateShoesModel';
import { CreateAddFactoryModel1648506235426 } from './migrations/1648506235426-CreateAddFactoryModel';
import { CreateAddFactoryPlanInfo1648509080827 } from './migrations/1648509080827-CreateAddFactoryPlanInfo';
import { CreateEmployee1656871061048 } from './migrations/1656871061048-CreateEmployee';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'teste',
  password: 'teste',
  database: 'bancaAdmin',
  entities: [WorkSessions, Employee, Teams, Factory, ShoesModel, PlanInfo],
  migrations: [
    CreateAddFactoryModel1648506235426,
    CreateAddFactoryPlanInfo1648509080827,
    // CreateAddProductionDetailModel1648510904722,
    // CreateAddProductionDetailTeams1648511621355,
    // CreateAddProductionPlanProductionDetail1648510244495,
    CreateEmployeeTeams1647303210741,
    CreateFactory1647562966675,
    // CreateProductionDetail1647483310364,
    CreatePlanInfo1647385966340,
    CreateShoesModel1648166135123,
    CreateTeams1646958469701,
    // CreateUsers1644534984010,
    // CreateUserTokens1644972400015,
    CreateWorkSession1646092650188,
    CreateEmployee1656871061048,
    CreateAddWorkSessionEmployee1646434774918,
  ],
});
