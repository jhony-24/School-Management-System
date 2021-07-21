import { Collection } from 'fireorm';
import { firestore } from 'firebase-admin';
import { SchoolGradeType, IClassroom } from '@system/types';

@Collection()
export class Classroom implements IClassroom {
  id: string;
  name: string;
  teacherId: string;
  grade: SchoolGradeType;
  createdAt: firestore.Timestamp;
}
