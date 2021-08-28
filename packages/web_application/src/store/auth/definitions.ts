export interface IAuthStore {
  userData: IUserData | null;
  tokenAccess: string | null;
  hasVerifySession: boolean;
}

export interface IUserData {}
