import { AdapterController } from '@utils/AdapterController';
import { Router } from 'express';

import { MarkStudentAttendance } from '@controllers/assistance/MarkStudentAttendance';

const app = Router();

app.post('/mark', AdapterController(MarkStudentAttendance));

export default app;
