import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { IStudent, PersonStateType } from '@system/types';

import { User } from './User';
import { Tutor } from './Tutor';
import { Homework } from './Homework';

@Entity()
export class Student implements IStudent {
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

  @OneToMany(() => Homework, (homework) => homework.student)
  homeworks: Homework[];

  @OneToOne(() => Tutor, (tutor) => tutor.id)
  @JoinColumn()
  tutor: Tutor;
}
