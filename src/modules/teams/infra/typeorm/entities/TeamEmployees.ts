import { Employee } from '@modules/employees/infra/typeorm/entities/Employee';
import { ITeamsEmployees } from '@modules/teams/domain/models/ITeamEmployees';
import {
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Teams } from './Teams';

@Entity('team_employees')
export class TeamEmployees implements ITeamsEmployees {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToMany(() => Employee, { eager: true })
  @JoinTable({
    name: 'team_employees',
    joinColumns: [{ name: 'employee_id' }],
    inverseJoinColumns: [{ name: 'team_id' }],
  })
  employee: Employee[];

  @ManyToMany(() => Teams)
  @JoinTable({
    name: 'team_employees',
    joinColumns: [{ name: 'team_id' }],
    inverseJoinColumns: [{ name: 'employee_id' }],
  })
  team: Teams[];
}
