import { Factory } from '@modules/factory/entities/Factory';
import { ProductionDetail } from '@modules/production/productionDetail/entities/ProductionDetail';
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
export class ShoesModel {
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

  @OneToMany(() => ProductionDetail, prod_detail => prod_detail.model, {
    cascade: true,
  })
  prod_detail: ProductionDetail[];

  @ManyToOne(() => Factory, factory => factory.prod_plan, { eager: true })
  @JoinColumn({ name: 'factory_id' })
  factory: Factory;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
