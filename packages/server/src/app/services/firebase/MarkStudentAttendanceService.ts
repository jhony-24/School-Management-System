import {
  IMarkStudentAttendance,
  MarkStudentAttendancePayload,
} from '@interfaces/IMarkStudentAttendance';
import ClassroomCalendar from '@models/firebase/ClassroomCalendar';
import StudentAttendance from '@services/StudentAttendance';
import { getRepository } from 'fireorm';

export default class MarkStudentAttendanceService implements IMarkStudentAttendance {
  async mark(payload: MarkStudentAttendancePayload): Promise<boolean> {
    const { studentId, classroomId, date, reason } = payload;
    const classroomRepository = getRepository(ClassroomCalendar);

    const response = await classroomRepository.runTransaction( async (transaction) => {
        try {
          const classroomCalendar = await transaction.whereEqualTo('classroomId', classroomId).findOne();
          if (!classroomCalendar) {
            throw new Error('Clase no encontrada');
          }
          const studentAttendance = new StudentAttendance(classroomCalendar);
          const currentAssistanceIndex =
            studentAttendance.getCurrentIndexAssistanceByDate(date);
          const assistance = studentAttendance.getCurrentAssistance();
          const student = studentAttendance.getStudentFromAssistance(
            studentId,
            assistance
          );

          if (student) {
            const newStudents = studentAttendance.removeStudentFromAssistance(
              student,
              assistance
            );
            classroomCalendar.assistance[currentAssistanceIndex].students = newStudents;
          } else {
            const newStudent = {
              studentId,
              reason,
            };
            classroomCalendar.assistance[currentAssistanceIndex].students.push(
              newStudent
            );
          }

          await transaction.update(classroomCalendar);
          return true;
        } catch (error) {
          throw new Error(error.message);
        }
    });
    return response;
  }
}
