import 'module-alias/register';
import 'reflect-metadata';

import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { json, urlencoded, Express } from 'express';

import routerInitialize from '@api';
import mysqlConnection from '@config/mysql';
import firebaseConnection from '@config/firebase';

export const server = async (app: Express) => {
  await mysqlConnection();
  await firebaseConnection();

  app.use(json());
  app.use(urlencoded({ extended: true }));

  app.use(cors());
  app.use(helmet());
  app.use(compression());
  app.use(routerInitialize());
};
