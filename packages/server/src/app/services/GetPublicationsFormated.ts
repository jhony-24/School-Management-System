import { IGetPublicationsFormated } from '@interfaces/IGetPublicationsFormated';
import { IGetHomeworkStudent } from '@interfaces/IGetHomeworkStudent';
import { IGetClassroomPublications } from '@interfaces/IGetClassroomPublications';
import { IFormatStudentHomeworks } from '@interfaces/IFormatStudentHomeworks';

export default class GetPublicationsFormated
  implements IGetPublicationsFormated
{
  public constructor(
    private _GetHomeworkStudent: IGetHomeworkStudent,
    private _GetClassroomPublications: IGetClassroomPublications,
    private _FormatStudentHomeworks: IFormatStudentHomeworks
  ) {}

  async getData(userId: string) {
    const { classroomId, homework } = await this._GetHomeworkStudent.getData(
      userId
    );

    if (homework.length === 0) {
      return null;
    }

    const currentPublications = await this._GetClassroomPublications.getData(
      classroomId
    );

    const publicationsFormated = this._FormatStudentHomeworks.formatData({
      homeworks: homework,
      publications: currentPublications,
    });

    return publicationsFormated;
  }
}
