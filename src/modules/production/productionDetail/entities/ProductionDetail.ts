import {
  Column,
  CreateDateColumn,
  Entity,
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
  billing: number;

  @Column()
  billing_date: Date;

  @Column()
  payday: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
