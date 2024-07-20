import { AboutUs } from 'src/about_us/entities/about_us.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class CustomSection {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  section_type: string;

  @OneToOne(() => AboutUs)
  @JoinColumn()
  about_us: AboutUs;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
