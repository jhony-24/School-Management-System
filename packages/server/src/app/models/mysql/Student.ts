import {
  Column,
  Generated,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

import User from './User';

import { PersonStateType } from '@system/types';

class Student {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;

  @PrimaryColumn()
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

export default Student;
