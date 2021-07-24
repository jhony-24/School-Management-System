import GetClassroomCalendarController from '@controllers/assistance/GetClassroomCalendarController';
import MarkStudentAttendanceController from '@controllers/assistance/MarkStudentAttendanceController';
import { AdapterController } from '@utils/AdapterController';
import { Router } from 'express';

const app = Router();

app.get('/', AdapterController(GetClassroomCalendarController));
app.post('/mark', AdapterController(MarkStudentAttendanceController));

export default app;
