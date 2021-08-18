import { Controller } from '@localtypes/Controller';
import GetClassroomPublications from '@services/firebase/GetClassroomPublications';
import FormatStudentHomeworks from '@services/FormatStudentHomeworks';
import GetPublicationsFormated from '@services/GetPublicationsFormated';
import GetHomeworkStudent from '@services/mysql/GetHomeworkStudent';
import { Request, Response } from 'express';

export default class GetPublicationsHomeworkController implements Controller {
  async start(request: Request, response: Response) {
    const { userId, userType } = request.body;

    try {
      const getPublicationsHomework = new GetPublicationsFormated(
        new GetHomeworkStudent(),
        new GetClassroomPublications(),
        new FormatStudentHomeworks()
      );

      const publicationsFormated = await getPublicationsHomework.getData(
        userId
      );

      if (!publicationsFormated) {
        return response
          .status(200)
          .json({ message: 'No existe hay resultados' });
      }

      return response.status(200).json(publicationsFormated);
    } catch (e) {
      return response.status(404).json({
        error: e.message,
      });
    }
  }
}
