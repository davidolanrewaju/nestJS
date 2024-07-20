import { CustomSection } from 'src/custom_sections/entities/custom_section.entity';
import {
  Column,
  Entity,
  JoinColumn,
  LineString,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class AboutUsService {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  title: string;

  @Column('text')
  description: LineString;

  @OneToOne(() => CustomSection)
  @JoinColumn()
  custom_section: CustomSection;

  @UpdateDateColumn()
  updatedAt: Date;
}
