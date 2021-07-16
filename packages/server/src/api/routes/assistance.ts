import GetClassroomCalendarController from '@controllers/assistance/GetClassroomCalendarController';
import { AdapterController } from '@utils/AdapterController';
import { Router } from 'express';

const app = Router();

app.get('/', AdapterController(GetClassroomCalendarController));

export default app;
