import { IAssistance } from "../../../../types";

export interface MarkStudentAttendancePayload {
    classroomId : string;
    studentId : string;
    date: string;
    reason?: string;
}

export interface IStudentAttendance {
    studentId: string; 
    reason?: string   
}

export interface IMarkStudentAttendance {
    mark(payload : MarkStudentAttendancePayload): Promise<IAssistance> 
}
  