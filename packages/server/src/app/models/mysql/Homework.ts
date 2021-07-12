import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Student } from './Student';
import { FirebaseFileType } from '@system/types';

@Entity()
export class Homework {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Student)
  @JoinColumn()
  student: Student;

  @Column({ type: 'varchar' })
  publicationId: string;

  @Column({ type: 'varchar' })
  comment: string;

  @Column({ type: 'simple-array', default: '[]' })
  file: FirebaseFileType[];

  @CreateDateColumn()
  createdAt: string;
}
