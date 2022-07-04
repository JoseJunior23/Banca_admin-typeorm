import { Employee } from '@modules/employees/infra/typeorm/entities/Employee';
import { WorkSessions } from '@modules/workSessions/infra/typeorm/entities/WorkSessions';

import { DataSource } from 'typeorm';

import { CreateWorkSession1646092650188 } from './migrations/1646092650188-CreateWorkSession';
import { CreateEmployee1656871061048 } from './migrations/1656871061048-CreateEmployee';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'teste',
  password: 'teste',
  database: 'bancaAdmin',
  entities: [WorkSessions, Employee],
  migrations: [
    // CreateAddFactoryModel1648506235426,
    // CreateAddFactoryProductionPlan1648509080827,
    // CreateAddProductionDetailModel1648510904722,
    // CreateAddProductionDetailTeams1648511621355,
    // CreateAddProductionPlanProductionDetail1648510244495,
    // CreateEmployeeTeams1647303210741,
    // CreateFactory1647562966675,
    // CreateProductionDetail1647483310364,
    // CreateProductionPlan1647385966340,
    // CreateShoesModel1648166135123,
    // CreateTeams1646958469701,
    // CreateUsers1644534984010,
    // CreateUserTokens1644972400015,
    CreateWorkSession1646092650188,
    CreateEmployee1656871061048,
    // CreateAddWorkSessionEmployee1646434774918,
  ],
});
