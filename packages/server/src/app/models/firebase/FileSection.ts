import { Collection } from 'fireorm';
import { FilePermissionType, IFileSection } from '@system/types';

//Figma Refactor

@Collection()
export class FileSection implements IFileSection {
  id: string;
  name: string;
  permissions: {
    teacherId: string;
    type: FilePermissionType;
  };
}
