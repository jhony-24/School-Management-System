import { Router } from 'express';
import { AuthenticationUserMiddleware } from '@middlewares/AuthenticationMiddleware';
import { TokenIsValidMiddleware } from '@middlewares/TokenIsValidMiddleware';
import { AdapterController } from '@utils/AdapterController';
import { GetUserData } from '@controllers/auth/GetUserData';

const app = Router();

app.post('/', AuthenticationUserMiddleware, AdapterController(GetUserData));
app.get(
  '/recovery-session',
  TokenIsValidMiddleware,
  AdapterController(GetUserData)
);

export default app;
