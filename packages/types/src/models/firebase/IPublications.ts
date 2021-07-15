import DateRangeType from '../../DateRangeType';
import FirebaseFileType from '../../FirebaseFileType';
import PublicationType from '../../PublicationType';

interface IPublications {
  id: string;
  classroomId: string;
  name: string;
  description: string;
  type: PublicationType;
  files: FirebaseFileType[];
  limitDate: DateRangeType;
}

export default IPublications;
