import { firestore } from 'firebase-admin';

import { ISystemStorage, FileType } from '@system/types';

export class SystemStorage implements ISystemStorage {
  id: string;
  fileSectionId: string;
  files: {
    name: string;
    url: string;
    type: FileType;
    createdAt: firestore.Timestamp;
  }[];
}
