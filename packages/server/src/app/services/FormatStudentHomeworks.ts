import { PublicationsFormated } from '@system/types';
import {
  FormatStudentHomeworksPayload,
  IFormatStudentHomeworks,
} from '@interfaces/IFormatStudentHomeworks';

export default class FormatStudentHomeworks implements IFormatStudentHomeworks {
  formatData(data: FormatStudentHomeworksPayload) {
    let newPublicationFormat: PublicationsFormated[] = [];

    data.publications.map((vPublication, iPublication) => {
      let newPublication = vPublication as PublicationsFormated;

      data.homeworks?.map((vHome, iHome) => {
        if (vPublication.id === vHome.publicationId) {
          newPublication.homework = vHome;
        }
      });

      newPublicationFormat.push(newPublication);
    });
    return newPublicationFormat;
  }
}
