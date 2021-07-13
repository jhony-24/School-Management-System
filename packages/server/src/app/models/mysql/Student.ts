import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { User } from './User';

import { IStudent, PersonStateType } from '@system/types';
import { Homework } from './Homework';
import { DetailStudent } from './DetailStudent';
import { Teacher } from './Teacher';

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

  @OneToOne(() => DetailStudent, { cascade: true })
  @JoinColumn()
  detailStudent: DetailStudent;

  @ManyToMany(() => Teacher, { cascade: true })
  @JoinTable()
  teacher: Teacher[];
}
