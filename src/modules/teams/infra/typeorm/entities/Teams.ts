import { PlanDetail } from '@modules/plans/planDetail/infra/typeorm/entities/PlanDetail';
import { ITeams } from '@modules/teams/domain/models/ITeams';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
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

  @OneToMany(() => PlanDetail, plan_detail => plan_detail.team, {
    cascade: true,
  })
  plan_detail: PlanDetail[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
