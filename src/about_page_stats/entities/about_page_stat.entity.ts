import { CustomSection } from 'src/custom_sections/entities/custom_section.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class AboutPageStat {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('int')
  years_in_business: number;

  @Column('int')
  customers: number;

  @Column('int')
  monthly_blog_readers: number;

  @Column('int')
  social_followers: number;

  @OneToOne(() => CustomSection)
  @JoinColumn()
  custom_section: CustomSection;

  @UpdateDateColumn()
  updatedAt: Date;
}
