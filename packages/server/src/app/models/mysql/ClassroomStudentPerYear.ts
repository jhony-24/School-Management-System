import { Column, Entity, ManyToOne } from 'typeorm';

import { IClassroomStudentPerYear } from '@system/types';
import { Student } from './Student';

@Entity()
export class ClassroomStudentPerYear implements IClassroomStudentPerYear {
  @ManyToOne(() => Student, { primary: true })
  student: Student;

  @Column({ type: 'varchar', primary: true })
  classroomId: string;

  @Column()
  year: string;
}
