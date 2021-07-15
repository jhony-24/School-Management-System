import { firestore } from 'firebase-admin';

import DateRangeType from '../../DateRangeType';

interface IClassroomCalendar {
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

export default IClassroomCalendar;
