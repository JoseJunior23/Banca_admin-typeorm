import { IEmployee } from '@modules/employees/domain/models/IEmployee';
import { WorkSection } from '@modules/workSections/infra/typeorm/entities/WorkSection';

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

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  nickname: string;

  @Column({ type: 'text' })
  phone: string;

  @ManyToOne(() => WorkSection, work_section => work_section.employees)
  @JoinColumn({ name: 'work_section_id' })
  work_section: WorkSection;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
