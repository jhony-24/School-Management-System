<<<<<<< HEAD
import GetClassroomCalendarController from '@controllers/assistance/GetClassroomCalendarController';
=======
>>>>>>> 5699a67940b048618d5c18fa149231ec61e1cf96
import MarkStudentAttendanceController from '@controllers/assistance/MarkStudentAttendanceController';
import { AdapterController } from '@utils/AdapterController';
import { Router } from 'express';

const app = Router();

<<<<<<< HEAD
app.get('/', AdapterController(GetClassroomCalendarController));
=======
>>>>>>> 5699a67940b048618d5c18fa149231ec61e1cf96
app.post('/mark', AdapterController(MarkStudentAttendanceController));

export default app;
