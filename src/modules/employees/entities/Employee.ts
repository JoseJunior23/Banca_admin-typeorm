import { WorkSessions } from '@modules/workSessions/entities/WorkSessions';
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
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  nickname: string;

  @Column()
  phone: string;

  @ManyToOne(() => WorkSessions, { eager: true })
  @JoinColumn({ name: 'work_sessions_id' })
  work_session: WorkSessions;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
