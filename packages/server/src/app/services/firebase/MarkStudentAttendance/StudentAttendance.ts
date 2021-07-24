import { IStudentAttendance } from '@interfaces/IMarkStudentAttendance';
import { IClassroomCalendar, IAssistance } from '@system/types';

export default class StudentAttendance {
  private assistanceIndex!: number;
  private student!: IStudentAttendance | undefined;

  constructor(private readonly classroomCalendar: IClassroomCalendar) {}

  getCurrentIndexAssistanceByDate(date: string) {
    this.assistanceIndex = this.classroomCalendar.assistance.findIndex((currentAssistance) => {
        return currentAssistance.createdAt === date;
    });
    return this.assistanceIndex;
  }

  getCurrentAssistance() {
    return this.classroomCalendar.assistance[this.assistanceIndex] || {};
  }

  existsCurrentIndex() {
    return this.assistanceIndex >= 0 && this.assistanceIndex !== undefined;
  }

  getStudentFromAssistance(studentId, assistance: any) {
    this.student = (assistance.students || []).find((currentStudent) => currentStudent.studentId === studentId);
    return this.student;
  }

  removeStudentFromAssistance(student: IStudentAttendance | undefined,assistance : IAssistance) {
    const newStudents =  (assistance.students || []).filter(currentStudent => {
        return currentStudent.studentId !== student?.studentId;
    })
    return newStudents;
  }

}
