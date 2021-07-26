import { Homework } from '@models/mysql/Homework';

export interface IGetHomeworkStudent {
  getData(userId: string): Promise<{
    classroomId: string;
    homework: Homework[];
  }>;
}
