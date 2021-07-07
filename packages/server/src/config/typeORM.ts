import Logger from '@utils/Logger';
import { createConnection } from 'typeorm';
import {
  MYSQL_DATABASE,
  MYSQL_HOST,
  MYSQL_PASSWORD,
  MYSQL_PORT,
  MYSQL_USERNAME,
} from './environments';

export default async function typeORM(): Promise<void> {
  try {
    await createConnection({
      username: MYSQL_USERNAME,
      password: MYSQL_PASSWORD,
      port: MYSQL_PORT,
      database: MYSQL_DATABASE,
      host: MYSQL_HOST,
      type: 'mysql',
      synchronize: true,
      logging: false,
      entities: ['src/app/mysql/models/**/*.ts'],
    });
  } catch (error) {
    Logger.error(error.message);
  }
}
