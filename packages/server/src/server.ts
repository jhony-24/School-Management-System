import 'reflect-metadata';

import { json, urlencoded, Express } from 'express';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';

import routerInitialize from '@api';

export const server = async (app: Express) => {
  app.use(json());
  app.use(urlencoded({ extended: true }));

  app.use(cors());
  app.use(helmet());
  app.use(compression());
  app.use(routerInitialize());
};
