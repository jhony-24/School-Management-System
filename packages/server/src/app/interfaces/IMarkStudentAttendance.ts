import { firestore } from "firebase-admin";

export interface MarkStudentAttendancePayload {
    classroomId : string;
    studentId : string;
    date: firestore.Timestamp;
    reason?: string;
}

export interface IMarkStudentAttendance {
    markStudentAttendance(payload : MarkStudentAttendancePayload): Promise<boolean> 
}
  