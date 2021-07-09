import { Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { FirebaseFileType } from '@system/types';

import Student from './Student';

class Homework {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  publicationId: string;

  @Column('varchar')
  comment: string;

  @Column({ type: 'simple-array', default: [] })
  file: FirebaseFileType[];

  @Column({ type: 'date', default: new Date() })
  createdAt: Date;

  @OneToOne(() => Student)
  @JoinColumn()
  student: Student;
}

export default Homework;
