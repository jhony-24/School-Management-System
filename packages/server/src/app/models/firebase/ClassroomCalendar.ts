import { firestore } from 'firebase-admin';
import { Collection } from 'fireorm';
import { DateRangeType } from '../../../../../types';

@Collection()
class School {
  id: string;
  classroomId: string;
  year: firestore.Timestamp;
  assitanceActive: DateRangeType;
  nonWorkingDays: {
    type: string;
    date: firestore.Timestamp;
  }[];
  assistance: {
    createdAt: firestore.Timestamp;
    students: {
      studentId: string;
      reason?: string;
    }[];
  }[];
}

export default School;
