import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('shoes_model')
export default class shoesModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  reference: string;

  @Column()
  description: string;

  @Column('float')
  price_pair_shoes: number;

  @Column('float')
  price_pespontador: number;

  @Column('float')
  price_coladeira: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
