import IStudent from './IStudent';

import FirebaseFileType from '../../FirebaseFileType';

interface IHomework {
  id: string;
  student: IStudent;
  publicationId: string;
  comment: string;
  file: FirebaseFileType[];
  createdAt: string;
}

export default IHomework;
