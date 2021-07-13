import SchoolGradeType from '../../SchoolGradeType';
import DateRangeType from '../../DateRangeType';
import { firestore } from 'firebase-admin';
import FilePermissionType from '../../FilePermissionType';
import FirebaseImage from '../../FirebaseImage';
import FirebaseFileType from '../../FirebaseFileType';
import PublicationType from '../../PublicationType';

export interface IClassroom {
  id: string;
  name: string;
  teacherId: string;
  //state : StateType
  grade: SchoolGradeType;
  activeDate: DateRangeType;
}

export interface IClassroomCalendar {
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

export interface IFileSection {
  id: string;
  name: string;
  permissions: {
    teacherId: string;
    type: FilePermissionType;
  };
}

export interface ISchool {
  id: string;
  name: string;
  directorId: string;
  image: FirebaseImage;
  location: {
    address: string;
    coordinates: {
      latitud: number;
      longitude: number;
    };
  };
}

export interface IPublications {
  id: string;
  classroomId: string;
  name: string;
  description: string;
  type: PublicationType;
  files: FirebaseFileType[];
  limitDate: DateRangeType;
}

export interface IFileSection {}

export interface ISystemStorage {}
