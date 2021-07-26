import { Router } from 'express';

import assistanceRouter from './routes/assistance';
import authenticationRouter from './routes/authentication';
import publicationStudentRouter from './routes/publicationStudent';

const routerConfiguration = () => {
  const router = Router();

  router.use('/auth', authenticationRouter);
  router.use('/assistance', assistanceRouter);
  router.use('/publicationStudent', publicationStudentRouter);

  return router;
};

export default routerConfiguration;
