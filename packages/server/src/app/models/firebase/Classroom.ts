import { Collection } from 'fireorm';
import { DateRangeType, SchoolGradeType, IClassroom } from '@system/types';

@Collection()
class Classroom implements IClassroom {
  id: string;
  name: string;
  teacherId: string;
  //state : StateType
  grade: SchoolGradeType;
  activeDate: DateRangeType;
}

export default Classroom;
