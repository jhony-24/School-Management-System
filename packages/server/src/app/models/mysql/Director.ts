import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IDirector } from '@system/types';

import { User } from './User';

@Entity()
export class Director implements IDirector {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Column({ type: 'char', length: 9 })
  phone: string;

  @Column({ type: 'varchar' })
  email: string;
}
