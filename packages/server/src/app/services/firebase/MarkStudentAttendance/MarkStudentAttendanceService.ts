import {
  IMarkStudentAttendance,
  MarkStudentAttendancePayload,
} from '@interfaces/IMarkStudentAttendance';
import { ClassroomCalendar } from '@models/firebase/ClassroomCalendar';
import StudentAttendance from './StudentAttendance';
import { getRepository } from 'fireorm';
import GetCurrentAssistanceByDate from './GetCurrentAssistanceByDate';
import StudentFromAssistance from './StudentFromAssistance';

export default class MarkStudentAttendanceService
  implements IMarkStudentAttendance
{
  async mark(payload: MarkStudentAttendancePayload): Promise<boolean> {
    const { studentId, classroomId, date, reason } = payload;
    const classroomRepository = getRepository(ClassroomCalendar);

    const response = await classroomRepository.runTransaction(async (transaction) => {
        try {
          const classroomCalendar = await transaction
            .whereEqualTo('classroomId', classroomId)
            .findOne();
          if (!classroomCalendar) {
            throw new Error('Clase no encontrada');
          }
          const getCurrentAssistance = new GetCurrentAssistanceByDate(classroomCalendar,date);
          const studentFromAssistance = new StudentFromAssistance(getCurrentAssistance,studentId);
          const studentAttendance = new StudentAttendance(getCurrentAssistance,studentFromAssistance);
          const { index } =  getCurrentAssistance.getAssistance();
          const exists = studentFromAssistance.getStudent();

          if (exists) {
            const newStudents = studentAttendance.removeStudentFromAssistance();
            classroomCalendar.assistance[index].students = newStudents;
          } else {
            const newStudent = {
              studentId,
              reason,
            };
            classroomCalendar.assistance[index].students.push(newStudent);
          }

          await transaction.update(classroomCalendar);
          return true;
        } catch (error) {
          throw new Error(error.message);
        }
      }
    );
    return response;
  }
}
