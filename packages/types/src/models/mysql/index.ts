import FirebaseFileType from '../../FirebaseFileType';
import PersonStateType from '../../PersonStateType';
import FirebaseImage from '../../FirebaseImage';

export interface IDetailStudent {
  id: string;
  relationShip: string;
}

export interface ITeacher {
  id: string;
  user: IUser;
  classroomId: string;
  state: PersonStateType;
  nickname: string;
  email: string;
  phone: string;
}

export interface IDirector {
  id: string;
  user: IUser;
  phone: string;
  email: string;
}

export interface IUser {
  id: string;
  fullName: string;
  dni: string;
  password: string;
  dayOfBirth: Date;
  profileImage: FirebaseImage;
}

export interface IClassroomStudentPerYear {
  id: string;
  year: string;
  createdAt: string;
}

export interface IStudent {
  id: string;
  user: IUser;
  state: PersonStateType;
  homeworks: IHomework[];
  detailStudent: IDetailStudent;
  teacher: ITeacher[];
}

export interface IHomework {
  id: string;
  student: IStudent;
  publicationId: string;
  comment: string;
  file: FirebaseFileType[];
  createdAt: string;
}

export interface ITutor {
  id: string;
  phone: string;
  dni: string;
  fullName: string;
  detailStudent: IDetailStudent[];
}
