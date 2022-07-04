import { IWorkSession } from '@modules/workSessions/domain/models/IworkSessions';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('work_sessions')
export class WorkSessions implements IWorkSession {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // @OneToMany(() => Employee, employee => employee.session, {
  //   cascade: true,
  // })
  // employee: Employee[];
}
