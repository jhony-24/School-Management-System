import jwt from 'jsonwebtoken';

import { TOKEN_KEY } from '@config/environments';
import { ITokenDecode } from '@interfaces/ITokenIsCaduced';
import { TokenPayload } from '@localtypes/TokenPayload';

class TokenDecode implements ITokenDecode {
  decode(token: string): TokenPayload | null {
    try {
      const verify_token = jwt.verify(token, TOKEN_KEY) as TokenPayload;
      return verify_token;
    } catch (error) {
      return null;
    }
  }
}

export default TokenDecode;
