import { Factory } from '@modules/factory/infra/typeorm/entities/Factory';
import { IPlanInfo } from '@modules/plans/planInfo/domain/models/IPlanInfo';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
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

  // @OneToMany(() => ProductionDetail, prod_detail => prod_detail.prod_plan, {
  //   cascade: true,
  // })
  // prod_detail: ProductionDetail[];
}
