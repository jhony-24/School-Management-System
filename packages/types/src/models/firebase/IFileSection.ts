import FilePermissionType from '../../FilePermissionType';

interface IFileSection {
  id: string;
  name: string;
  permissions: {
    teacherId: string;
    type: FilePermissionType;
  };
}

export default IFileSection;
