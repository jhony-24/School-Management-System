import { IUserData } from '../../../store/auth/definitions';

const restoreSession = async (): Promise<IUserData | null> => {
  try {
    return {};
  } catch (error) {
    console.log('restoreSession: ', error);
    return null;
  }
};

export default restoreSession;
