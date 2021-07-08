import { Router } from 'express';

import assistanceRouter from './routes/assistanceRouter';
import authenticationRouter from './routes/authenticationRouter';

export default function api() {
  const router = Router();

  router.use('/auth', authenticationRouter);
  router.use('/assistance', assistanceRouter);

  return router;
}
