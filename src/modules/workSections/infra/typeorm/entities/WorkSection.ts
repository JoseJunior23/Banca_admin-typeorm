import { Employee } from '@modules/employees/infra/typeorm/entities/Employee';
import { IWorkSection } from '@modules/workSections/domain/models/IWorkSection';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('work_sections')
export class WorkSection implements IWorkSection {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @OneToMany(() => Employee, employees => employees.work_section, {
    cascade: true,
  })
  employees: Employee[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
