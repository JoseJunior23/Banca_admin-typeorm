import { DataSource } from 'typeorm';
import 'dotenv/config';
import { WorkSection } from '@modules/workSections/infra/typeorm/entities/WorkSection';
import { CreateWorkSection1646092650188 } from './migrations/1646092650188-CreateWorkSection';
import { Employee } from '@modules/employees/infra/typeorm/entities/Employee';
import { CreateEmployee1656871061048 } from './migrations/1656871061048-CreateEmployee';
import { AddWorkSectionIdToEmployee1658707744327 } from './migrations/1658707744327-AddWorkSectionIdToEmployee';

const port = process.env.DB_PORT as number | undefined;

export const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [WorkSection, Employee],
  migrations: [
    CreateWorkSection1646092650188,
    CreateEmployee1656871061048,
    AddWorkSectionIdToEmployee1658707744327,
  ],
});
