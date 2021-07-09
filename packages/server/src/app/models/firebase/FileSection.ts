import { Collection } from 'fireorm';
import { FilePermissionType } from '@system/types';

//Figma Refactor

@Collection()
class FileSection {
  id: string;
  name: string;
  permissions: {
    teacherId: string;
    type: FilePermissionType;
  };
}

export default FileSection;
