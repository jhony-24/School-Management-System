import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Student } from './Student';

@Entity()
export class Tutor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'char', length: 9 })
  phone: string;

  @Column({ type: 'char', length: 8 })
  dni: string;

  @Column({ type: 'varchar' })
  fullName: string;

  @ManyToMany(() => Student, { cascade: true })
  @JoinTable()
  student: Student[];
}
