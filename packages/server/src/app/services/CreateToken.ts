import jwt from 'jsonwebtoken';
import { TOKEN_KEY } from '@config/environments';
import { UserType } from '@system/types';

class CreateToken {
  create(userId:string, userType:UserType) {
    try {
      const formatData = { userId, userType };
      const tokenGenerated = jwt.sign(formatData, TOKEN_KEY, { expiresIn: '15d' });
      const tokenFormat = `Bearer ${tokenGenerated}`;
      return tokenFormat;
    } catch (error) {
      return null;
    }
  }
}

export default CreateToken;
