import { IEmployee } from '@modules/employees/domain/models/IEmployee';
import { WorkSessions } from '@modules/workSessions/infra/typeorm/entities/WorkSessions';

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
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

  @ManyToOne(() => WorkSessions, session => session.employee, { eager: true })
  @JoinColumn({ name: 'work_session_id' })
  session: WorkSessions;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
