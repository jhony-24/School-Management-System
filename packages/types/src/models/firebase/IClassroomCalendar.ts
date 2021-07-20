import { firestore } from 'firebase-admin';

import DateRangeType from '../../DateRangeType';


export interface IAssistance {
  createdAt: firestore.Timestamp | string;
  students: {
    studentId: string;
    reason?: string;
  }[]
}

interface IClassroomCalendar {
  id: string;
  classroomId: string;
  year: firestore.Timestamp;
  assitanceActive: DateRangeType;
  nonWorkingDays: {
    type: string;
    date: firestore.Timestamp;
  }[];
  assistance: IAssistance[];
}

export default IClassroomCalendar;
