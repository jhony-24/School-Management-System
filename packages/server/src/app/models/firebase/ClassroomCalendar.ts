import { firestore } from 'firebase-admin';
import { Collection } from 'fireorm';
import { DateRangeType, IClassroomCalendar } from '@system/types';

@Collection()
class ClassroomCalendar implements IClassroomCalendar {
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

export default ClassroomCalendar;
