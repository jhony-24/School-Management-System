import RelationshipType from '../../RelationshipType';
import IStudent from './IStudent';
import ITutor from './ITutor';

interface IStudentTutors {
  student: IStudent;
  tutor: ITutor;
  relationship: RelationshipType;
}

export default IStudentTutors;
