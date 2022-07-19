import { Factory } from '@modules/factory/infra/typeorm/entities/Factory';
import { PlanDetail } from '@modules/plans/planDetail/infra/typeorm/entities/PlanDetail';
import { IPlanInfo } from '@modules/plans/planInfo/domain/models/IPlanInfo';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('plan_info')
export class PlanInfo implements IPlanInfo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  variation: string;

  @Column()
  description: string;

  @Column()
  entry_date: Date;

  @Column('int')
  factory_plan: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Factory, factory => factory.plan_info, { eager: true })
  @JoinColumn({ name: 'factory_id' })
  factory: Factory;

  @OneToMany(() => PlanDetail, plan_detail => plan_detail.plan_info, {
    cascade: true,
  })
  plan_detail: PlanDetail[];
}
