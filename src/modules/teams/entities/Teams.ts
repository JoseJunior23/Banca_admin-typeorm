import { Employee } from '@modules/employees/entities/Employee';
import { ProductionDetail } from '@modules/production/productionDetail/entities/ProductionDetail';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
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

  @OneToMany(() => ProductionDetail, prod_detail => prod_detail.team)
  prod_detail: ProductionDetail[];

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
