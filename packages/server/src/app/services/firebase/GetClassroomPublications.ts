import { IGetClassroomPublications } from '@interfaces/IGetClassroomPublications';
import { Publications } from '@models/firebase/Publications';
import { getRepository } from 'fireorm';

class GetClassroomPublications implements IGetClassroomPublications {
  async getData(clasroomId: string) {
    const classroomCalendarRepository = getRepository(Publications);
    const response = await classroomCalendarRepository
      .whereEqualTo('classroomId', clasroomId)
      .find();
    return response;
  }
}

export default GetClassroomPublications;
