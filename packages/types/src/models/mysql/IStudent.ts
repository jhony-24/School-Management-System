import IUser from './IUser';
import IHomework from './IHomework';
import ITutor from './ITutor';

import PersonStateType from '../../PersonStateType';

interface IStudent {
  id: string;
  user: IUser;
  state: PersonStateType;
  homeworks: IHomework[];
  tutor: ITutor;
}

export default IStudent;
