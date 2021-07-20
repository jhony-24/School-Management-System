import {
  IGetClassroomCalendar,
  IGetClassroomPayload,
} from '@interfaces/IGetClassroomCalendar';
import ClassroomCalendar from '@models/firebase/ClassroomCalendar';
import { getRepository } from 'fireorm';

export default class GetClassroomCalendarService
  implements IGetClassroomCalendar
{
  async getClassroomCalendar(classroom: IGetClassroomPayload) {
    const classroomCalendarRepository = getRepository(ClassroomCalendar);
    const response = await classroomCalendarRepository.findOne();
    return response;
  }

}
