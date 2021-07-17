import { Entity, ManyToOne, Column } from 'typeorm';

import { Student } from './Student';
import { Tutor } from './Tutor';

import { IStudentTutors, RelationshipType } from '@system/types';

@Entity()
export class StudentTutors implements IStudentTutors {
  @ManyToOne(() => Student, { primary: true })
  student: Student;

  @ManyToOne(() => Tutor, { primary: true })
  tutor: Tutor;

  @Column({
    type: 'enum',
    enum: RelationshipType,
  })
  relationship: RelationshipType;
}
