import { Collection } from 'fireorm';
import { FilePermissionType, IFileSection } from '@system/types';

//Figma Refactor

@Collection()
class FileSection implements IFileSection {
  id: string;
  name: string;
  permissions: {
    teacherId: string;
    type: FilePermissionType;
  };
}

export default FileSection;
