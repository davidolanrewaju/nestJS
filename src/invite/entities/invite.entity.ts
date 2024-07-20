import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { InviteStatus } from './inviteEnums/invite.enum';
import { Organisation } from 'src/organisations/entities/organisation.entity';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Invite {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', unique: true })
  email: string;

  @Column({ type: 'enum', enum: InviteStatus, default: InviteStatus.PENDING })
  status: InviteStatus;

  @Column({ type: 'timestamp' })
  sent_at: Date;

  @Column('timestamp')
  expires_at: Date;

  @OneToOne(() => Organisation)
  @JoinColumn()
  organisation: Organisation;

  @ManyToOne(() => User, (user) => user.invite)
  user: User;
}
