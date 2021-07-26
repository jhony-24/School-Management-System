import IStudent from './IStudent';

import FirebaseFileType from '../../FirebaseFileType';
import { firestore } from 'firebase-admin';

interface IHomework {
  id: string;
  /* studentId: string; */
  student: IStudent;
  publicationId: string;
  comment: string;
  file: FirebaseFileType[];
  createdAt: firestore.Timestamp;
}

export default IHomework;
