import express from 'express';

import { server } from './server';

import mysqlConnection from '@config/mysql';
import firebaseConnection from '@config/firebase';

(async () => {
  const app = express();
  const port = process.env.PORT || 7000;

  await server(app);
  await mysqlConnection();
  await firebaseConnection();

  app.listen(port, () => {
    console.log('Server running in port : ' + port);
  });
})();
