import { Entity, ManyToOne } from 'typeorm';

import { Student } from './Student';
import { Tutor } from './Tutor';

import { IStudentTutors } from '@system/types';

@Entity()
export class StudentTutors implements IStudentTutors {
  @ManyToOne(() => Student, { primary: true })
  student: Student;

  @ManyToOne(() => Tutor, { primary: true })
  tutor: Tutor;
}
