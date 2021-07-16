import { Controller } from '@localtypes/Controller';
import GetClassroomCalendarService from '@services/firebase/GetClassroomCalendarService';
import { Request, Response } from 'express';

export default class GetClassroomCalendarController implements Controller {
  async start(request: Request, response: Response) {
    const getClassroomCalendarService = new GetClassroomCalendarService();
    try {
      const data = await getClassroomCalendarService.getClassroomCalendar({});
      return response.status(200).json(data);
    } catch {
      return response.status(404).json({
        error: '',
      });
    }
  }
}
