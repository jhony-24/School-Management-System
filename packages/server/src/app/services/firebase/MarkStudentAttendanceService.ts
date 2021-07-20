import {
  IMarkStudentAttendance,
  MarkStudentAttendancePayload,
} from '@interfaces/IMarkStudentAttendance';
import ClassroomCalendar from '@models/firebase/ClassroomCalendar';
import { getRepository } from 'fireorm';

export default class MarkStudentAttendanceService 
implements IMarkStudentAttendance {



  async markStudentAttendance(payload: MarkStudentAttendancePayload) : Promise<boolean> {
    const { studentId, classroomId } = payload;
    const classroomRepository = getRepository(ClassroomCalendar);

    try {
      const classroomCalendar = await classroomRepository.whereEqualTo('classroomId',classroomId).findOne();
      if(!classroomCalendar) {
        throw new Error("Clase no encontrada");
      }

      const currentAssistanceIndex = classroomCalendar.assistance.findIndex( currentAssistance => {
            return currentAssistance.createdAt === payload.date;
      });
      const getAssistance = classroomCalendar.assistance[currentAssistanceIndex];
      const getStudents = getAssistance.students;
      const existsStudent = getStudents.find(currentStudent => currentStudent.studentId === studentId);
      
      if(existsStudent) {
        classroomCalendar.assistance[currentAssistanceIndex].students.push({
          studentId : payload.studentId,
          reason : payload.reason
        });
      }
      else {
        classroomCalendar.assistance[currentAssistanceIndex].students  = getAssistance.students.filter(currentStudent => {
          return currentStudent.studentId !== studentId;
        });
      }
      
      await classroomRepository.update(classroomCalendar);
      return true;
    }
    catch(error) {
      throw new Error(error.message);
    }

  }
}
