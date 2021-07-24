import MarkStudentAttendanceController from '@controllers/assistance/MarkStudentAttendanceController';
import { AdapterController } from '@utils/AdapterController';
import { Router } from 'express';

const app = Router();

app.post('/mark', AdapterController(MarkStudentAttendanceController));

export default app;
