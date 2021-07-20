import { TokenPayload } from '@localtypes/TokenPayload';

export interface ITokenDecode {
  decode(token: string): TokenPayload | null;
}
