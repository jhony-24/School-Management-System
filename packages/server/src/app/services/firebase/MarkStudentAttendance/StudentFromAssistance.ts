import GetCurrentAssistanceByDate from './GetCurrentAssistanceByDate';
import StudentId from './StudentId';

export default class StudentFromAssistance {
  constructor(
    private readonly assistance: GetCurrentAssistanceByDate,
    private readonly studentId: StudentId
  ) {}
  getStudent() {
    return (this.assistance.getAssistance().assistance.students || []).find(
      (currentStudent) => currentStudent.studentId === this.studentId.getId()
    );
  }
}
