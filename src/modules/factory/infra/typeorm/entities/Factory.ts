import { IFactory } from '@modules/factory/domain/models/IFactory';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('factory')
export class Factory implements IFactory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  company_name: string;

  @Column()
  fantasy_name: string;

  @Column()
  phone: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // @OneToMany(() => ProductionPlan, prod_plan => prod_plan.factory, {
  //   cascade: true,
  // })
  // prod_plan: ProductionPlan[];

  // @OneToMany(() => ShoesModel, model => model.factory, {
  //   cascade: true,
  // })
  // model: ShoesModel[];
}
