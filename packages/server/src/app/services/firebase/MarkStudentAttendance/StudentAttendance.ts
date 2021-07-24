import GetCurrentAssistanceByDate from './GetCurrentAssistanceByDate';
import StudentFromAssistance from './StudentFromAssistance';

export default class StudentAttendance {
  constructor(
    private readonly currentAssistanceByDate: GetCurrentAssistanceByDate,
    private readonly studentFromAssistance: StudentFromAssistance
  ) {}

  removeStudentFromAssistance() {
    const assistance = this.currentAssistanceByDate.getAssistance().assistance;
    const student = this.studentFromAssistance.getStudent();
    const newStudents = (assistance.students || []).filter((currentStudent) => {
      return currentStudent.studentId !== student?.studentId;
    });
    return newStudents;
  }
}
