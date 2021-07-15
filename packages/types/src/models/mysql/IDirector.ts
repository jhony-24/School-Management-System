import IUser from './IUser';

interface IDirector {
  id: string;
  user: IUser;
  phone: string;
  email: string;
}

export default IDirector;
