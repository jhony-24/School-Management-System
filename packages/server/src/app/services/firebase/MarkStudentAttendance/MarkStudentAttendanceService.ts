import {
  IMarkStudentAttendance,
  MarkStudentAttendancePayload,
} from '@interfaces/IMarkStudentAttendance';
import { ClassroomCalendar } from '@models/firebase/ClassroomCalendar';
import StudentAttendance from './StudentAttendance';
import { getRepository } from 'fireorm';
import GetCurrentAssistanceByDate from './GetCurrentAssistanceByDate';
import StudentFromAssistance from './StudentFromAssistance';
import { IClassroomCalendar } from '../../../../../../types';
import AssistanceDate from './AssistanceDate';
import StudentId from './StudentId';

export default class MarkStudentAttendanceService
  implements IMarkStudentAttendance
{
  async mark(payload: MarkStudentAttendancePayload) {
    const { studentId, classroomId, date, reason } = payload;
    const classroomRepository = getRepository(ClassroomCalendar);

    if (!classroomId && !date && !studentId) {
      throw new Error('Faltan enviar datos');
    }

    const response = await classroomRepository.runTransaction(async (transaction) => {
        try {
          const classroomCalendar = await transaction.whereEqualTo('classroomId', classroomId).findOne();
          if (!classroomCalendar) {
            throw new Error('Clase no encontrada');
          }
          const assistanceDate = new AssistanceDate(date);
          const getCurrentAssistance = new GetCurrentAssistanceByDate(classroomCalendar,assistanceDate);
          const studentFromAssistance = new StudentFromAssistance(getCurrentAssistance, new StudentId(studentId));
          const studentAttendance = new StudentAttendance(getCurrentAssistance, studentFromAssistance);
          const { index } = getCurrentAssistance.getAssistance();
          const exists = studentFromAssistance.getStudent();

          if (index === -1) {
            throw new Error('No existe la asistencia solicitada');
          }

          if (exists) {
            const newStudents = studentAttendance.removeStudentFromAssistance();
            classroomCalendar.assistance[index].students = newStudents;
          } else {
            const newStudent = {
              studentId,
              reason: reason || '',
            };
            classroomCalendar.assistance[index].students.push(newStudent);
          }

          const updatedClassroom = await transaction.update(classroomCalendar) as IClassroomCalendar;
          const updatedCurrentAssistance = new GetCurrentAssistanceByDate(updatedClassroom,assistanceDate);
          return updatedCurrentAssistance.getAssistance().assistance
        } catch (error) {
          throw new Error(error.message);
        }
      }
    );
    return response;
  }
}
