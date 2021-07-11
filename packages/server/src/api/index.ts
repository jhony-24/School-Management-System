import { Router } from 'express';

import assistanceRouter from './routes/assistance';
import authenticationRouter from './routes/authentication';

const routerConfiguration = () => {
  const router = Router();

  router.use('/auth', authenticationRouter);
  router.use('/assistance', assistanceRouter);

  return router;
};

export default routerConfiguration;
