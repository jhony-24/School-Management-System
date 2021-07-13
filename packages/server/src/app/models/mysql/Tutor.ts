import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DetailStudent } from './DetailStudent';

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

  @ManyToMany(() => DetailStudent, { cascade: true })
  @JoinTable()
  detailStudent: DetailStudent[];
}
