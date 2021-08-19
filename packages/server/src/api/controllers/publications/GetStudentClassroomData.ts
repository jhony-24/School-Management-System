import { Request, Response } from 'express';

import { Controller } from '@localtypes/Controller';

import GetHomeworkStudent from '@services/mysql/GetHomeworkStudent';
import FormatStudentHomeworks from '@services/FormatStudentHomeworks';
import GetPublicationsFormated from '@services/GetPublicationsFormated';
import GetClassroomPublications from '@services/firebase/GetClassroomPublications';

export class GetStudentClassroomData implements Controller {
  async start(request: Request, response: Response) {
    const { userId } = request.body;

    try {
      const getPublications = new GetPublicationsFormated(
        new GetHomeworkStudent(),
        new GetClassroomPublications(),
        new FormatStudentHomeworks()
      );

      const publications = await getPublications.getData(userId);

      if (!publications) {
        return response
          .status(200)
          .json({ message: 'No existe hay resultados' });
      }

      return response.status(200).json(publications);
    } catch (e) {
      return response.status(404).json({
        error: e.message,
      });
    }
  }
}
