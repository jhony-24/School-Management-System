import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { firestore } from 'firebase-admin';

import { Student } from './Student';
import { FirebaseFileType, IHomework } from '@system/types';

@Entity()
export class Homework implements IHomework {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Student, (user) => user.homeworks)
  @JoinColumn()
  student: Student;

  @Column({ type: 'varchar' })
  publicationId: string;

  @Column({ type: 'varchar' })
  comment: string;

  @Column({ type: 'simple-array', default: '[]' })
  file: FirebaseFileType[];

  @CreateDateColumn()
  createdAt: firestore.Timestamp;
}
