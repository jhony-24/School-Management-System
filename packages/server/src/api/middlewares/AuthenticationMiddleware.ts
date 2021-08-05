import { NextFunction, Request, Response } from 'express';
import AuthenticationUser from '@services/mysql/AuthenticationUser';
import ComparePasswordWithBcrypt from '@services/ComparePassword';
import CreateToken from '@services/CreateToken';
import { UserType } from '@system/types';

type RequestControllerType = {
  dni : string,
  password : string,
  user_type : UserType,
}

export const AuthenticationUserMiddleware = async (
  req: Request,
  res: Response,
  next:NextFunction,
) => {
  const { dni, password, user_type } = req.body as RequestControllerType;

  const user_id_response = await new AuthenticationUser(new ComparePasswordWithBcrypt())
    .authentication(dni, password);
  if (!user_id_response) {
    res.status(404).json({ message: 'Credenciales Incorrectas' });
    return;
  }

  const token_generated = new CreateToken().create(user_id_response as string, user_type);
  if (!token_generated) {
    res.status(500).json({ message: 'No se pudo crear el token' });
    return;
  }
  req.body.token_generated = token_generated;
  req.body.user_id = user_id_response;
  req.body.user_type = user_type;
  next();
};

export default AuthenticationUserMiddleware;
