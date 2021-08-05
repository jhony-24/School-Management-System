import { GetDirector } from '@services/mysql/GetDirector';
import { GetTeacher } from '@services/mysql/GetTeacher';
import { GetStudent } from '@services/mysql/GetStudent';
import { UserType } from '@system/types';

export const GetUserByType = {
  [UserType.DIRECTOR]: new GetDirector(),
  [UserType.TEACHER]: new GetTeacher(),
  [UserType.STUDENT]: new GetStudent(),
};
