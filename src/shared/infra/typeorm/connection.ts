import { DataSource } from 'typeorm';
import 'dotenv/config';
import { WorkSection } from '@modules/workSections/infra/typeorm/entities/WorkSection';
import { CreateWorkSection1646092650188 } from './migrations/1646092650188-CreateWorkSection';
import { Employee } from '@modules/employees/infra/typeorm/entities/Employee';
import { CreateEmployee1656871061048 } from './migrations/1656871061048-CreateEmployee';
import { AddWorkSectionIdToEmployee1658707744327 } from './migrations/1658707744327-AddWorkSectionIdToEmployee';
import { Teams } from '@modules/teams/infra/typeorm/entities/Teams';
import { CreateTeams1646958469701 } from './migrations/1646958469701-CreateTeams';
import { CreateTeamsEmployees1661818387913 } from './migrations/1661818387913-CreateTeamsEmployees';
import { CreatePlanInfo1647385966340 } from './migrations/1647385966340-CreatePlanInfo';
import { CreateFactory1647562966675 } from './migrations/1647562966675-CreateFactory';
import { CreateShoesModel1648166135123 } from './migrations/1648166135123-CreateShoesModel';
import { CreatePlanDetail1647483310364 } from './migrations/1647483310364-CreatePlanDetail';
import { AddPlanInfoIdToPlanDetail1648510244495 } from './migrations/1648510244495-AddPlanInfoIdToPlanDetail';
import { AddModelIdToPlanDetail1648510904722 } from './migrations/1648510904722-AddModelIdToPlanDetail';
import { AddTeamsIdToPlanDetail1648511621355 } from './migrations/1648511621355-AddTeamsIdToPlandetail';
import { AddFactoryIdToModel1648506235426 } from './migrations/1648506235426-AddFactoryIdToModel';
import { PlanInfo } from '@modules/plans/planInfo/infra/typeorm/entities/PlanInfo';
import { PlanDetail } from '@modules/plans/planDetail/infra/typeorm/entities/PlanDetail';
import { Factory } from '@modules/factory/infra/typeorm/entities/Factory';
import { ShoesModel } from '@modules/shoesModel/infra/typeorm/entities/ShoesModel';

const port = process.env.DB_PORT as number | undefined;

export const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [WorkSection, Employee, Teams, PlanInfo, PlanDetail, Factory, ShoesModel],
  migrations: [
    CreateWorkSection1646092650188,
    CreateEmployee1656871061048,
    AddWorkSectionIdToEmployee1658707744327,
    CreateTeams1646958469701,
    CreateTeamsEmployees1661818387913,
    CreatePlanInfo1647385966340,
    CreateFactory1647562966675,
    CreateShoesModel1648166135123,
    CreatePlanDetail1647483310364,
    AddPlanInfoIdToPlanDetail1648510244495,
    AddModelIdToPlanDetail1648510904722,
    AddTeamsIdToPlanDetail1648511621355,
    AddFactoryIdToModel1648506235426,
  ],
});
