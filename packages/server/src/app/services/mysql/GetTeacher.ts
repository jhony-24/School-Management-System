import { getRepository } from 'typeorm';
import { Teacher } from '@models/mysql/Teacher';
import { IGetUser } from '@interfaces/IGetUsers';

export class GetTeacher implements IGetUser {
  async getData(userId:string) {
    try {
      const teacherReposotory = getRepository(Teacher);
      const teacherData = await teacherReposotory.findOne({
        where: {
          user: userId,
        },
        relations: ['user'],
      });
      if (typeof teacherData !== 'undefined') return teacherData as Teacher;
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
