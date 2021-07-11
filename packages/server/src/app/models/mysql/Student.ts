import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { User } from './User';

import { PersonStateType } from '@system/types';

@Entity()
export class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Column({
    type: 'enum',
    enum: PersonStateType,
    default: PersonStateType.ACTIVE,
  })
  state: PersonStateType;
}
