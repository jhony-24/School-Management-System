import { Router } from 'express';
import { AdapterController } from '@utils/AdapterController';

import { GetStudentClassroomData } from '@controllers/publications/GetStudentClassroomData';

const app = Router();

app.get('/', AdapterController(GetStudentClassroomData));

export default app;
