import { firestore } from 'firebase-admin';
import FileType from '../../FileType';

interface ISystemStorage {
  id: string;
  fileSectionId: string;
  files: {
    name: string;
    url: string;
    type: FileType;
    createdAt: firestore.Timestamp;
  }[];
}

export default ISystemStorage;
