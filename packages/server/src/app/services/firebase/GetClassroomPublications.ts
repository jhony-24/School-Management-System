import { IGetClassroomPublications } from '@interfaces/IGetClassroomPublications';
import { Publications } from '@models/firebase/Publications';
import { getRepository } from 'fireorm';

export default class GetClassroomPublications
  implements IGetClassroomPublications
{
  async getData(clasroomId: string) {
    const classroomCalendarRepository = getRepository(Publications);
    const response = await classroomCalendarRepository
      .whereEqualTo('classroomId', clasroomId)
      .find();
    return response;
  }
}
