import 'module-alias/register';
import 'reflect-metadata';
import dotenv from 'dotenv';
import express, { json, urlencoded } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import api from '@api';
import Logger from '@utils/Logger';
import typeORM from '@config/typeORM';

dotenv.config();

async function run() {
  const app = express();
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(cors());
  app.use(helmet());
  app.use(compression());
  app.use(api());
  const serverPort = process.env.PORT || 7000;
  await typeORM();
  app.listen(serverPort);
  Logger.info(serverPort as string);
}
run();
