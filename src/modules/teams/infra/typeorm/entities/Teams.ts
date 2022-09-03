import { Employee } from '@modules/employees/infra/typeorm/entities/Employee';
import { ITeams } from '@modules/teams/domain/models/ITeams';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('teams')
export class Teams implements ITeams {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  // @OneToMany(() => PlanDetail, plan_detail => plan_detail.team, {
  //   cascade: true,
  // })
  // plan_detail: PlanDetail[];
  @ManyToMany(() => Employee, { eager: true })
  @JoinTable({
    name: 'teams_employees',
    joinColumns: [{ name: 'team_id' }],
    inverseJoinColumns: [{ name: 'employee_id' }],
  })
  employees: Employee[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
