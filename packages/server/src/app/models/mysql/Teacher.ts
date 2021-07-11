import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { PersonStateType } from '@system/types';

import { User } from './User';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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
