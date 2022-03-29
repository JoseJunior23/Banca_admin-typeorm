import { ProductionPlan } from '@modules/production/productionPlan/entities/productionPlan';
import { ShoesModel } from '@modules/shoesModel/entities/ShoesModel';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('factory')
export class Factory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  corporate_name: string;

  @Column()
  fantasy_name: string;

  @Column()
  phone: string;

  @OneToMany(() => ProductionPlan, prod_plan => prod_plan.factory)
  prod_plan: ProductionPlan[];

  @OneToMany(() => ShoesModel, model => model.factory)
  model: ShoesModel[];

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}
