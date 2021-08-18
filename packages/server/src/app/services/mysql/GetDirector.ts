import { getRepository } from 'typeorm';
import { Director } from '@models/mysql/Director';
import { IGetUser } from '@interfaces/IGetUsers';

export class GetDirector implements IGetUser {
  async getData(userId) {
    try {
      const directorRepository = getRepository(Director);
      const directorData = await directorRepository.findOne({
        where: {
          user: userId,
        },
        relations: ['user'],

      });

      if (typeof directorData !== 'undefined') return directorData as Director;
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
