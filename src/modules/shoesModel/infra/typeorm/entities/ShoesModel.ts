import { Factory } from '@modules/factory/infra/typeorm/entities/Factory';
import { IShoesModel } from '@modules/shoesModel/domain/models/IShoesModel';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
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

  // @OneToMany(() => ProductionDetail, prod_detail => prod_detail.model, {
  //   cascade: true,
  // })
  // prod_detail: ProductionDetail[];

  @ManyToOne(() => Factory, factory => factory.model, { eager: true })
  @JoinColumn({ name: 'factory_id' })
  factory: Factory;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
