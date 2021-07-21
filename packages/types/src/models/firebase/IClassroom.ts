import { firestore } from 'firebase-admin';

import SchoolGradeType from '../../SchoolGradeType';

interface IClassroom {
  id: string;
  name: string;
  teacherId: string;
  grade: SchoolGradeType;
  createdAt: firestore.Timestamp;
}

export default IClassroom;
