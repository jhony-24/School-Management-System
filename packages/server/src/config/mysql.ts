import { createConnection } from 'typeorm';

import { User } from '@models/mysql/User';
import { Tutor } from '@models/mysql/Tutor';
import { Director } from '@models/mysql/Director';
import { Homework } from '@models/mysql/Homework';
import { Student } from '@models/mysql/Student';
import { Teacher } from '@models/mysql/Teacher';
import { StudentTutors } from '@models/mysql/StudentTutors';
import { ClassroomStudentPerYear } from '@models/mysql/ClassroomStudentPerYear';

import Logger from '@utils/Logger';

import {
  MYSQL_DATABASE,
  MYSQL_HOST,
  MYSQL_PASSWORD,
  MYSQL_PORT,
  MYSQL_USERNAME,
} from './environments';

const mysqlInitialize = async () => {
  try {
    await createConnection({
      username: MYSQL_USERNAME,
      password: MYSQL_PASSWORD,
      port: MYSQL_PORT,
      database: MYSQL_DATABASE,
      host: MYSQL_HOST,
      type: 'mysql',
      synchronize: true,
      // dropSchema: true,
      entities: [
        User,
        Student,
        Teacher,
        Tutor,
        Director,
        StudentTutors,
        Homework,
        ClassroomStudentPerYear,
      ],
    });
  } catch (error) {
    Logger.error(error.message);
  }
};

export default mysqlInitialize;
