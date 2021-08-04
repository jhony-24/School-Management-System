import bcrypt from 'bcrypt';
import { IComparePassword } from '@localtypes/ComparePassword';

class ComparePasswordWithBcrypt implements IComparePassword {
  async compare(password, passwordHash) {
    try {
      return await bcrypt.compare(password, passwordHash);
    } catch (error) { return false; }
  }
}

export default ComparePasswordWithBcrypt;
