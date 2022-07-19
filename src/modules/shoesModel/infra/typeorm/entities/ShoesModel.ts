import { Factory } from '@modules/factory/infra/typeorm/entities/Factory';
import { PlanDetail } from '@modules/plans/planDetail/infra/typeorm/entities/PlanDetail';
import { IShoesModel } from '@modules/shoesModel/domain/models/IShoesModel';
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

@Entity('shoes_model')
export class ShoesModel implements IShoesModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  reference: string;

  @Column()
  description: string;

  @Column('float')
  price_pairs_shoes: number;

  @Column('float')
  price_pespontador: number;

  @Column('float')
  price_coladeira: number;

  @OneToMany(() => PlanDetail, plan_detail => plan_detail.model, {
    cascade: true,
  })
  plan_detail: PlanDetail[];

  @ManyToOne(() => Factory, factory => factory.model, { eager: true })
  @JoinColumn({ name: 'factory_id' })
  factory: Factory;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
