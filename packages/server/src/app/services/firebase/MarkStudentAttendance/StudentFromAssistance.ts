import GetCurrentAssistanceByDate from './GetCurrentAssistanceByDate';

export default class StudentFromAssistance {
  constructor(
    private readonly assistance: GetCurrentAssistanceByDate,
    private readonly studentId: string
  ) {}
  getStudent() {
    return (this.assistance.getAssistance().assistance.students || []).find(
      (currentStudent) => currentStudent.studentId === this.studentId
    );
  }
}
