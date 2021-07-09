import {
  Column,
  Generated,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';

import { PersonStateType } from '@system/types';

import User from './User';

class Teacher {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;

  @PrimaryColumn()
  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Column('varchar')
  classroomId: string;

  @Column({
    type: 'enum',
    enum: PersonStateType,
    default: PersonStateType.ACTIVE,
  })
  state: PersonStateType;

  @Column('varchar')
  nickname: string;

  @Column('varchar')
  email: string;

  @Column({ type: 'char', length: 9 })
  phone: string;
}

export default Teacher;
