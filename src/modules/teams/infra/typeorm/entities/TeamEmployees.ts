import { Employee } from '@modules/employees/infra/typeorm/entities/Employee';
import { ITeamsEmployees } from '@modules/teams/domain/models/ITeamEmployees';
import {
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Teams } from './Teams';

export class TeamEmployees implements ITeamsEmployees {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Employee, employee => employee.team_employees, {
    cascade: true,
  })
  team_employee: Employee[];

  @ManyToOne(() => Teams, team => team.team_employee)
  @JoinColumn({ name: 'team_id' })
  team: Teams;
}
