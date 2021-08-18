import { getRepository } from 'typeorm';
import { User } from '@models/mysql/User';
import { IComparePassword } from '@localtypes/ComparePassword';

class AuthenticationUser {
  constructor(private comparePassword : IComparePassword) {}

  async authentication(
    dni: string,
    password: string,
  ) {
    const userRepository = getRepository(User);
    const userResponse = await userRepository.findOne({
      select: ['id', 'password'],
      where: { dni },
    });
    if (userResponse !== undefined) {
      const user = userResponse as User;
      const isPasswordCorrect = await this.comparePassword.compare(password, user.password);
      if (isPasswordCorrect) return user.id;
    }
    return null;
  }
}

export default AuthenticationUser;
