import jwt from 'jsonwebtoken';

import { TOKEN_KEY } from '@config/environments';
import { ITokenIsCaduced } from '@interfaces/ITokenIsCaduced';

class TokenIsCaduced implements ITokenIsCaduced {
  isCaduced(token: string) {
    try {
      const verify_token = jwt.verify(token, TOKEN_KEY);
      if (!verify_token) {
        return false;
      }

      return true;
    } catch (error) {
      return false;
    }
  }
}

export default TokenIsCaduced;
