import { UserType } from '@system/types';

export type TokenPayload = {
  userId: string;
  userType: UserType;
};
