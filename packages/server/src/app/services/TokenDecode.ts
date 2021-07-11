import jwt from 'jsonwebtoken';

import { TOKEN_KEY } from '@config/environments';
import { ITokenDecode } from '@interfaces/ITokenDecode';

class TokenDecode implements ITokenDecode {
  decode(token: string): string {
    const token_splited = token.split(' ')[0];

    try {
      const verify_token = jwt.verify(token_splited, TOKEN_KEY) as string;

      return verify_token;
    } catch (error) {
      return '';
    }
  }
}

export default TokenDecode;
