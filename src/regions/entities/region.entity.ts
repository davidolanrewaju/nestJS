import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Region {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  region_code: string;

  @Column({ type: 'varchar' })
  region_name: string;

  @Column('varchar')
  country_code: string;

  @Column('varchar')
  status: string;

  @Column('varchar')
  created_on: string;

  @Column('varchar')
  modified_on: string;

  @Column('varchar')
  modified_by: string;

  @ManyToOne(() => User, (created_by) => created_by.region)
  created_by: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
