import { UserType } from '@system/types';

export type TokenPayload = {
  user_id: string;
  user_type: UserType;
};
