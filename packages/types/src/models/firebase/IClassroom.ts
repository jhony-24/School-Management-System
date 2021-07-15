import DateRangeType from '../../DateRangeType';
import SchoolGradeType from '../../SchoolGradeType';

interface IClassroom {
  id: string;
  name: string;
  teacherId: string;
  //state : StateType
  grade: SchoolGradeType;
  activeDate: DateRangeType;
}

export default IClassroom;
