import jwt from 'jsonwebtoken';
import { TOKEN_KEY } from '@config/environments';
import { UserType } from '@system/types';

class CreateToken {
  create(user_id:string, user_type:UserType) {
    try {
      const formatData = { user_id, user_type };
      const token_generated = jwt.sign(formatData, TOKEN_KEY, { expiresIn: '15d' });
      const token_format = `Bearer ${token_generated}`;
      return token_format;
    } catch (error) {
      return null;
    }
  }
}

export default CreateToken;
