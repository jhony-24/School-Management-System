import { currentClassroomAssistanceMock } from "@mocks/markStudentAttendance.mock";
import StudentAttendance from "@services/firebase/MarkStudentAttendance/StudentAttendance";

describe('StudentAttendance', () => {
    let studentAttendance !: StudentAttendance;

    beforeEach(() => {
        studentAttendance = new StudentAttendance(currentClassroomAssistanceMock as any);
    })

    test('should exists the current assistance by date', () => {
        const date = "20/07/2021 9:00:00am";
        const expectedIndex = studentAttendance.getCurrentIndexAssistanceByDate(date)
        expect(expectedIndex).not.toBe(-1);
        expect(expectedIndex).toBeGreaterThan(-1);
        expect(studentAttendance.existsCurrentIndex()).toBeTruthy();
    })

    test('should emit an error if not exists the classroom by date', () => {
        const date = "20/07/2024 06:00:00am";
        const expectedIndex = studentAttendance.getCurrentIndexAssistanceByDate(date)
        expect(expectedIndex).toBe(-1);
        expect(studentAttendance.existsCurrentIndex()).toBeFalsy();
    })

    test('should exists a student by assistance date and studentId', () => {
        const date = "20/07/2021 9:00:00am";
        const expectedIndex = studentAttendance.getCurrentIndexAssistanceByDate(date)
        const student = studentAttendance.getStudentFromAssistance("me",studentAttendance.getCurrentAssistance());
        expect(expectedIndex).not.toBe(-1);
        expect(expectedIndex).toBeGreaterThan(-1);
        expect(student).toMatchObject({
            studentId : "me"
        });
    })

    
    test('should remove an student if exists in the assistance', () => {
        const date = "20/07/2021 9:00:00am";
        studentAttendance.getCurrentIndexAssistanceByDate(date)
        const assistance = studentAttendance.getCurrentAssistance();
        const totalStudents = assistance.students.length;
        const student = studentAttendance.getStudentFromAssistance("me",assistance);
        expect(student).toMatchObject({
            studentId : "me"
        });
        const newListStudents = studentAttendance.removeStudentFromAssistance(student,assistance);
        expect(newListStudents.length).toBeLessThan(totalStudents);
    })
})
