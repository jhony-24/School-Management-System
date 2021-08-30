import { useSelector } from 'react-redux';

import { IAuthStore } from './definitions';
import { ReduxStore } from '../../core/types/ReduxStore';

export const useAuth = () =>
  useSelector<ReduxStore, IAuthStore>((state) => state.auth);
