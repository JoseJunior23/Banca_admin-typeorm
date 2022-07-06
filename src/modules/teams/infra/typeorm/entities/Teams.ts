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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // @OneToMany(() => ProductionDetail, prod_detail => prod_detail.team, {
  //   cascade: true,
  // })
  // prod_detail: ProductionDetail[];

  @ManyToMany(() => Employee, employee => employee.team, { eager: true })
  @JoinTable({
    name: 'employee_teams',
    joinColumns: [{ name: 'team_id' }],
    inverseJoinColumns: [{ name: 'employee_id' }],
  })
  employee: Employee[];
}
