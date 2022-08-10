import { IFactory } from '@modules/factory/domain/models/IFactory';
import { ShoesModel } from '@modules/shoesModel/infra/typeorm/entities/ShoesModel';

import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
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

  @OneToMany(() => ShoesModel, model => model.factory, {
    cascade: true,
  })
  model: ShoesModel[];
}
