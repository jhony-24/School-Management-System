import GetPublicationsHomeworkController from '@controllers/Publications/GetPublicationsHomeworkController';
import { AdapterController } from '@utils/AdapterController';
import { Router } from 'express';

const app = Router();

app.get('/', AdapterController(GetPublicationsHomeworkController));

export default app;
