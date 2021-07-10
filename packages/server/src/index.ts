import 'module-alias/register';
import 'reflect-metadata';

import dotenv from 'dotenv';

import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import express, { json, urlencoded } from 'express';

import apiConfig from '@api';
import Logger from '@utils/Logger';
import typeORM from '@config/typeORM';
import firebaseAdmin from '@config/firebase';
import { loadEnvironments } from '@config/environments';

dotenv.config();
loadEnvironments();

export async function server() {
  const app = express();
  const serverPort = process.env.PORT || 7000;

  await typeORM();
  await firebaseAdmin();

  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(cors());
  app.use(helmet());
  app.use(compression());
  app.use(apiConfig());

  app.listen(serverPort, () => {
    Logger.info(serverPort as string);
  });
}

server();
