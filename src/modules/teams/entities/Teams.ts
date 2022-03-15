import { Employee } from '@modules/employees/entities/Employee';
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
export class Teams {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToMany(() => Employee, employee => employee.team)
  @JoinTable({
    name: 'employee_teams',
    joinColumns: [{ name: 'team_id' }],
    inverseJoinColumns: [{ name: 'employee_id' }],
  })
  employee: Employee[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
