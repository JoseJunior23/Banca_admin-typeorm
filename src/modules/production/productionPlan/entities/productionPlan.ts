import { Factory } from '@modules/factory/entities/Factory';
import { ProductionDetail } from '@modules/production/productionDetail/entities/ProductionDetail';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('production_plan')
export class ProductionPlan {
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

  @OneToMany(() => ProductionDetail, prod_detail => prod_detail.prod_plan)
  prod_detail: ProductionDetail[];

  @ManyToOne(() => Factory, factory => factory.prod_plan, { eager: true })
  factory: Factory;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
