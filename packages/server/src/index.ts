import express from 'express';
import { server } from './server';

(async () => {
  const app = express();
  const port = process.env.PORT || 7000;

  await server(app);

  app.listen(port, () => {
    console.log('Server running in port : ' + port);
  });
})();
