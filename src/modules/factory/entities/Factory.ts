import {
  Column,
  CreateDateColumn,
  Entity,
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

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}
