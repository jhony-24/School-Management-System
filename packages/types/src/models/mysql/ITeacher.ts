import IUser from './IUser';

import PersonStateType from '../../PersonStateType';

interface ITeacher {
  id: string;
  user: IUser;
  classroomId: string;
  state: PersonStateType;
  nickname: string;
  email: string;
  phone: string;
}

export default ITeacher;
