import { Organisation } from 'src/organisations/entities/organisation.entity';
import { Product } from 'src/products/entities/product.entity';
import { Profile } from 'src/profiles/entities/profile.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserRole } from './enums/role.enum';
import { Sms } from 'src/sms/entities/sms.entity';
import { JobListing } from 'src/job_listing/entities/job_listing.entity';
import { Region } from 'src/regions/entities/region.entity';
import { Invite } from 'src/invite/entities/invite.entity';
import { Review } from 'src/reviews/entities/review.entity';
import { AboutUs } from 'src/about_us/entities/about_us.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  username: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.GUEST })
  role: UserRole;

  @Column({ type: 'text', unique: true })
  email: string;

  @Column('text')
  password: string;

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;

  @OneToMany(() => Product, (product) => product.user)
  products: Product[];

  @OneToMany(() => Sms, (sms) => sms.sender)
  sms: Sms[];

  @OneToMany(() => JobListing, (jobs) => jobs.users)
  jobs: JobListing[];

  @OneToMany(() => Region, (region) => region.created_by)
  region: Region[];

  @OneToMany(() => Invite, (invite) => invite.user)
  invite: Invite[];

  @OneToMany(() => Review, (review) => review.user)
  review: Review[];

  @OneToMany(() => AboutUs, (about) => about.user)
  about_us: AboutUs[];

  @ManyToMany(() => Organisation)
  @JoinTable()
  organisations: Organisation[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
