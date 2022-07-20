import { IPlanDetail } from '@modules/plans/planDetail/domain/models/IPlanDetail';
import { PlanInfo } from '@modules/plans/planInfo/infra/typeorm/entities/PlanInfo';
import { ShoesModel } from '@modules/shoesModel/infra/typeorm/entities/ShoesModel';
import { Teams } from '@modules/teams/infra/typeorm/entities/Teams';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('plan_detail')
export class PlanDetail implements IPlanDetail {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  entry_date: Date;

  @Column()
  departure_date: Date;

  @Column()
  production_sheet: number;

  @Column('int')
  number_pairs: number;

  @Column('float')
  billed: number;

  @Column()
  billed_date: Date;

  @Column()
  payment_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Teams, team => team.plan_detail, { eager: true })
  @JoinColumn({ name: 'teams_id' })
  team: Teams;

  @ManyToOne(() => PlanInfo, plan => plan.plan_detail, { eager: true })
  @JoinColumn({ name: 'plan_info_id' })
  plan_info: PlanInfo;

  @ManyToOne(() => ShoesModel, model => model.plan_detail, { eager: true })
  @JoinColumn({ name: 'shoes_model_id' })
  model: ShoesModel;
}
