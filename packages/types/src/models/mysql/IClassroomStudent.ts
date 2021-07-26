import IStudent from './IStudent';

interface IClassroomStudent {
  classroomId: string;
  student: IStudent;
  year: string;
}

export default IClassroomStudent;
