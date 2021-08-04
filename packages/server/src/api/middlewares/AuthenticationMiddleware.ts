import { NextFunction, Request, Response } from 'express';
import AuthenticationUser from '@services/mysql/AuthenticationUser';
import ComparePasswordWithBcrypt from '@services/ComparePassword';
import CreateToken from '@services/CreateToken';
import { UserType } from '@system/types';

type RequestControllerType = {
  DNI : string,
  PASSWORD : string,
  USER_TYPE : UserType,
}

export const AuthenticationUserMiddleware = async (
  req: Request,
  res: Response,
  next:NextFunction,
) => {
  const { DNI, PASSWORD, USER_TYPE } = req.body as RequestControllerType;

  const USER_ID_RESPONSE = await new AuthenticationUser(new ComparePasswordWithBcrypt())
    .authentication(DNI, PASSWORD);
  if (!USER_ID_RESPONSE) {
    res.status(404).json({ MESSAGE: 'Credenciales Incorrectas' });
    return;
  }

  const TOKEN_GENERATED = new CreateToken().create(USER_ID_RESPONSE as string, USER_TYPE);
  if (!TOKEN_GENERATED) {
    res.status(500).json({ message: 'No se pudo crear el token' });
    return;
  }
  req.body.TOKEN_GENERATED = TOKEN_GENERATED;
  req.body.USER_ID = USER_ID_RESPONSE;
  req.body.USER_TYPE = USER_TYPE;
  next();
};

export default AuthenticationUserMiddleware;
