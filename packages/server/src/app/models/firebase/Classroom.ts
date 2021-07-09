import { Collection } from 'fireorm';
import { DateRangeType, SchoolGradeType } from '@system/types';

@Collection()
class Classroom {
  id: string;
  name: string;
  teacherId: string;
  //state : StateType
  grade: SchoolGradeType;
  activeDate: DateRangeType;
}

export default Classroom;
