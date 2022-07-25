import { IEmployeeTeams } from '@modules/employees/domain/models/IEmployeeTeams';
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Employee } from './Employee';

@Entity('employee_teams')
export class EmployeeTeam implements IEmployeeTeams {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // @ManyToOne(() => Employee, employee => employee.employee_team)
  // @JoinColumn({ name: 'employee_id' })
  // employee: Employee;

  // @ManyToOne(() => Teams, team => team.employee_team)
  // @JoinColumn({ name: 'team_id' })
  // team: Teams;
}
