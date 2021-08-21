import { Router } from 'express';

import { AdapterController } from '@utils/AdapterController';
import { SendHomework } from '@controllers/homework/SendHomework';

const app = Router();

app.post('/:userid', AdapterController(SendHomework));

export default app;
