import { currentClassroomAssistanceMock } from '@mocks/markStudentAttendance.mock';
import AssistanceDate from '@services/firebase/MarkStudentAttendance/AssistanceDate';
import GetCurrentAssistanceByDate from '@services/firebase/MarkStudentAttendance/GetCurrentAssistanceByDate';
import StudentAttendance from '@services/firebase/MarkStudentAttendance/StudentAttendance';
import StudentFromAssistance from '@services/firebase/MarkStudentAttendance/StudentFromAssistance';
import StudentId from '@services/firebase/MarkStudentAttendance/StudentId';
import { IClassroomCalendar } from '../../../../types';

const data = currentClassroomAssistanceMock as any;

const CurrentAssistanceDate = (data: IClassroomCalendar, date: string) => {
  return new GetCurrentAssistanceByDate(data, new AssistanceDate(date));
};

describe('StudentAttendance', () => {
  test('should exists the current assistance by date', () => {
    const date = '20/07/2021 9:00:00am';
    const getCurrentAssistance = CurrentAssistanceDate(data, date);
    const { index } = getCurrentAssistance.getAssistance();
    expect(index).not.toBe(-1);
    expect(index).toBeGreaterThan(-1);
  });

  test('should emit an error if not exists the classroom by date', () => {
    const date = '20/07/2024 06:00:00am';
    const getCurrentAssistance = CurrentAssistanceDate(data, date);
    const { index } = getCurrentAssistance.getAssistance();
    expect(index).toBe(-1);
  });

  test('should exists a student by assistance date and studentId', () => {
    const date = '20/07/2021 9:00:00am';
    const studentId = 'me';
    const getCurrentAssistance = CurrentAssistanceDate(data, date);
    const studentFromAssistance = new StudentFromAssistance(
      getCurrentAssistance,
      new StudentId(studentId),
    );
    const { index } = getCurrentAssistance.getAssistance();
    expect(index).not.toBe(-1);
    expect(index).toBeGreaterThan(-1);
    expect(studentFromAssistance.getStudent()).toMatchObject({
      studentId: 'me',
    });
  });

  test('should remove an student if exists in the assistance', () => {
    const date = '20/07/2021 9:00:00am';
    const studentId = 'me';
    const getCurrentAssistance = CurrentAssistanceDate(data, date);
    const studentFromAttendance = new StudentFromAssistance(
      getCurrentAssistance,
      new StudentId(studentId),
    );
    const studentAttendance = new StudentAttendance(
      getCurrentAssistance,
      studentFromAttendance,
    );
    const expectedStudents = studentAttendance.removeStudentFromAssistance();
    const expectedStudent = studentFromAttendance.getStudent();
    const totalStudents = getCurrentAssistance.getAssistance().assistance.students.length;
    expect(expectedStudent).toMatchObject({
      studentId: 'me',
    });
    expect(expectedStudents.length).toBeLessThan(totalStudents);
  });
});
