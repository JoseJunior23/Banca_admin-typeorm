import { ProductionPlan } from '@modules/production/productionPlan/entities/productionPlan';
import { ShoesModel } from '@modules/shoesModel/entities/ShoesModel';
import { Teams } from '@modules/teams/entities/Teams';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('production_detail')
export class ProductionDetail {
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
  payday: Date;

  @ManyToOne(() => Teams, team => team.prod_detail, { eager: true })
  team: Teams;

  @ManyToOne(() => ProductionPlan, plan => plan.prod_detail, { eager: true })
  prod_plan: ProductionPlan;

  @ManyToOne(() => ShoesModel, model => model.prod_detail)
  model: ShoesModel;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
