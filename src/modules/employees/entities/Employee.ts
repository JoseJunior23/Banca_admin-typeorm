import { Teams } from '@modules/teams/entities/Teams';
import { WorkSessions } from '@modules/workSessions/entities/WorkSessions';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  nickname: string;

  @Column()
  phone: string;

  @ManyToOne(() => WorkSessions, session => session.employee, { eager: true })
  @JoinColumn({ name: 'work_session_id' })
  session: WorkSessions;

  @ManyToMany(() => Teams)
  @JoinTable({
    name: 'employee_teams',
    joinColumns: [{ name: 'employee_id' }],
    inverseJoinColumns: [{ name: 'team_id' }],
  })
  team: Teams[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
