import IStudent from './IStudent';

interface IClassroomStudentPerYear {
  year: string;
  classroomId: string;
  student: IStudent;
}

export default IClassroomStudentPerYear;
