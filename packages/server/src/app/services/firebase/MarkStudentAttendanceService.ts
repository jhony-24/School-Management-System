import {
  IMarkStudentAttendance,
  MarkStudentAttendancePayload,
} from '@interfaces/IMarkStudentAttendance';
import ClassroomCalendar from '@models/firebase/ClassroomCalendar';
import StudentAttendance from '@services/StudentAttendance';
import { getRepository } from 'fireorm';

export default class MarkStudentAttendanceService implements IMarkStudentAttendance {
  async mark(payload: MarkStudentAttendancePayload): Promise<boolean> {
    const { studentId, classroomId, date } = payload;
    const classroomRepository = getRepository(ClassroomCalendar);

    const response = await classroomRepository.runTransaction(async () => {
      try {
        const classroomCalendar = await classroomRepository.whereEqualTo('classroomId', classroomId).findOne();
        if (!classroomCalendar) {
          throw new Error('Clase no encontrada');
        }
        const studentAttendance = new StudentAttendance(classroomCalendar);
        const currentAssistanceIndex = studentAttendance.getCurrentIndexAssistanceByDate(date);
        const assistance = studentAttendance.getCurrentAssistance();
        const student = studentAttendance.getStudentFromAssistance(studentId, assistance);

        if (student) {
          const newStudents = studentAttendance.removeStudentFromAssistance(student, assistance);
          classroomCalendar.assistance[currentAssistanceIndex].students =
            newStudents;
        } else {
          const newStudent = {
            studentId: payload.studentId,
            reason: payload.reason,
          };
          classroomCalendar.assistance[currentAssistanceIndex].students.push(
            newStudent
          );
        }

        await classroomRepository.update(classroomCalendar);
        return true;
      } catch (error) {
        throw new Error(error.message);
      }
    });
    return response;

  }
}
