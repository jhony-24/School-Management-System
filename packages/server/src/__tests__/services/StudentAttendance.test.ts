import { currentClassroomAssistanceMock } from '@mocks/markStudentAttendance.mock';
import GetCurrentAssistanceByDate from '@services/firebase/MarkStudentAttendance/GetCurrentAssistanceByDate';
import StudentAttendance from '@services/firebase/MarkStudentAttendance/StudentAttendance';
import StudentFromAssistance from '@services/firebase/MarkStudentAttendance/StudentFromAssistance';

const data = currentClassroomAssistanceMock as any;

describe('StudentAttendance', () => {
  test('should exists the current assistance by date', () => {
    const date = '20/07/2021 9:00:00am';
    const getCurrentAssistance = new GetCurrentAssistanceByDate(data, date);
    const { index } = getCurrentAssistance.getAssistance();
    expect(index).not.toBe(-1);
    expect(index).toBeGreaterThan(-1);
  });

  test('should emit an error if not exists the classroom by date', () => {
    const date = '20/07/2024 06:00:00am';
    const getCurrentAssistance = new GetCurrentAssistanceByDate(data, date);
    const { index } = getCurrentAssistance.getAssistance();
    expect(index).toBe(-1);
  });

  test('should exists a student by assistance date and studentId', () => {
    const date = '20/07/2021 9:00:00am';
    const studentId = 'me';
    const getCurrentAssistance = new GetCurrentAssistanceByDate(data, date);
    const studentFromAssistance = new StudentFromAssistance(
      getCurrentAssistance,
      studentId
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
    const getCurrentAssistance = new GetCurrentAssistanceByDate(data, date);
    const studentFromAttendance = new StudentFromAssistance(
      getCurrentAssistance,
      studentId
    );
    const studentAttendance = new StudentAttendance(
      getCurrentAssistance,
      studentFromAttendance
    );
    const expectedStudents = studentAttendance.removeStudentFromAssistance();
    const expectedStudent = studentFromAttendance.getStudent();
    const totalStudents =
      getCurrentAssistance.getAssistance().assistance.students.length;
    expect(expectedStudent).toMatchObject({
      studentId: 'me',
    });
    expect(expectedStudents.length).toBeLessThan(totalStudents);
  });
});
