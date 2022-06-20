import { Employee } from '@modules/employees/entities/Employee';
import { Factory } from '@modules/factory/entities/Factory';
import { ProductionDetail } from '@modules/production/productionDetail/entities/ProductionDetail';
import { ProductionPlan } from '@modules/production/productionPlan/entities/productionPlan';
import { ShoesModel } from '@modules/shoesModel/entities/ShoesModel';
import { Teams } from '@modules/teams/entities/Teams';
import { User } from '@modules/users/entities/User';
import { WorkSessions } from '@modules/workSessions/entities/WorkSessions';

import { DataSource } from 'typeorm';

import { CreateUsers1644534984010 } from './migrations/1644534984010-CreateUsers';
import { CreateUserTokens1644972400015 } from './migrations/1644972400015-CreateUserTokens';
import { CreateWorkSession1646092650188 } from './migrations/1646092650188-CreateWorkSession';
import { CreateEmployees1646434052876 } from './migrations/1646434052876-CreateEmployees';
import { CreateAddWorkSessionEmployee1646434774918 } from './migrations/1646434774918-CreateAddWorkSessionEmployee';
import { CreateTeams1646958469701 } from './migrations/1646958469701-CreateTeams';
import { CreateEmployeeTeams1647303210741 } from './migrations/1647303210741-CreateEmployeeTeams';
import { CreateProductionPlan1647385966340 } from './migrations/1647385966340-CreateProductionPlan';
import { CreateProductionDetail1647483310364 } from './migrations/1647483310364-CreateProductionDetail';
import { CreateFactory1647562966675 } from './migrations/1647562966675-CreateFactory';
import { CreateShoesModel1648166135123 } from './migrations/1648166135123-CreateShoesModel';
import { CreateAddFactoryModel1648506235426 } from './migrations/1648506235426-CreateAddFactoryModel';
import { CreateAddFactoryProductionPlan1648509080827 } from './migrations/1648509080827-CreateAddFactoryProductionPlan';
import { CreateAddProductionPlanProductionDetail1648510244495 } from './migrations/1648510244495-CreateAddProductionPlanProductionDetail';
import { CreateAddProductionDetailModel1648510904722 } from './migrations/1648510904722-CreateAddProductionDetailModel';
import { CreateAddProductionDetailTeams1648511621355 } from './migrations/1648511621355-CreateAddProductionDetailTeams';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'teste',
  password: 'teste',
  database: 'bancaAdmin',
  entities: [
    User,
    Employee,
    Factory,
    ShoesModel,
    Teams,
    WorkSessions,
    ProductionDetail,
    ProductionPlan,
  ],
  migrations: [
    CreateAddFactoryModel1648506235426,
    CreateAddFactoryProductionPlan1648509080827,
    CreateAddProductionDetailModel1648510904722,
    CreateAddProductionDetailTeams1648511621355,
    CreateAddProductionPlanProductionDetail1648510244495,
    CreateAddWorkSessionEmployee1646434774918,
    CreateEmployees1646434052876,
    CreateEmployeeTeams1647303210741,
    CreateFactory1647562966675,
    CreateProductionDetail1647483310364,
    CreateProductionPlan1647385966340,
    CreateShoesModel1648166135123,
    CreateTeams1646958469701,
    CreateUsers1644534984010,
    CreateUserTokens1644972400015,
    CreateWorkSession1646092650188,
  ],
});
