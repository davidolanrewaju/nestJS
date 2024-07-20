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
export class JobListing {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  title: string;

  @Column({ type: 'text', unique: true })
  description: string;

  @Column('varchar')
  location: string;

  @Column('varchar')
  salary: string;

  @Column('varchar')
  job_type: string;

  @Column('varchar')
  company_name: string;

  @ManyToOne(() => User, (user) => user.jobs)
  users: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
