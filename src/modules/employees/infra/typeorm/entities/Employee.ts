import { IEmployee } from '@modules/employees/domain/models/IEmployee';

import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('employees')
export class Employee implements IEmployee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  nickname: string;

  @Column()
  phone: string;

  // @ManyToOne(() => WorkSessions, session => session.employee, { eager: true })
  // @JoinColumn({ name: 'work_session_id' })
  // session: WorkSessions;

  // @ManyToMany(() => Teams, team => team.employee)
  // @JoinTable({
  //   name: 'employee_teams',
  //   joinColumns: [{ name: 'employee_id' }],
  //   inverseJoinColumns: [{ name: 'team_id' }],
  // })
  // team: Teams[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
