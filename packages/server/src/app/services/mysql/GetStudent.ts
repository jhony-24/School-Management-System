import { getRepository } from 'typeorm';
import { Student } from '@models/mysql/Student';
import { IGetUser } from '@interfaces/IGetUsers';

export class GetStudent implements IGetUser {
  async getData(userId) {
    try {
      const studentRepository = getRepository(Student);
      const studentData = await studentRepository.findOne({
        where: {
          user: userId,
        },
        relations: ['user'],
      });
      if (typeof studentData !== 'undefined') return studentData as Student;
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
