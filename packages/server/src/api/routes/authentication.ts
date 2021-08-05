import { Router } from 'express';
import { AuthenticationUserMiddleware } from '@middlewares/AuthenticationMiddleware';
import { TokenIsValidMiddleware } from '@middlewares/TokenIsValidMiddleware';
import { AdapterController } from '@utils/AdapterController';
import { GetUserController } from '@controllers/auth/GetUserController';

const app = Router();

app.get('/recovery-session', TokenIsValidMiddleware, AdapterController(GetUserController));
app.post('/', AuthenticationUserMiddleware, AdapterController(GetUserController));

export default app;
