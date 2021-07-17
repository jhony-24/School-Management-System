import IUser from './IUser';
import IHomework from './IHomework';
import PersonStateType from '../../PersonStateType';

interface IStudent {
  id: string;
  user: IUser;
  state: PersonStateType;
  homeworks: IHomework[];
}

export default IStudent;
