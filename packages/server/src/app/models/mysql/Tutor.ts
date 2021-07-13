import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DetailStudent } from './DetailStudent';
import { ITutor } from '@system/types';

@Entity()
export class Tutor implements ITutor {
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
