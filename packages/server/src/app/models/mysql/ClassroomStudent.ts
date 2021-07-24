import { Column, Entity, ManyToOne } from 'typeorm';

import { IClassroomStudent } from '@system/types';
import { Student } from './Student';

@Entity()
export class ClassroomStudent implements IClassroomStudent {
  @ManyToOne(() => Student, { primary: true })
  student: Student;

  @Column({ type: 'varchar', primary: true })
  classroomId: string;
}
