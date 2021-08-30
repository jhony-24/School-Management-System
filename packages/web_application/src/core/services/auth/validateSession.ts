import { IUserData } from '../../../store/auth/definitions';

const validateSession = async (): Promise<IUserData | null> => {
  try {
    return {};
  } catch (error) {
    console.log('validateSession: ', error);
    return null;
  }
};

export default validateSession;
