import { NextFunction, Request, Response } from 'express';
import TokenDecode from '@services/TokenDecode';
import TokenFormatIsValid from '@services/TokenFormatIsValid';

type RequestControllerType = {
  authorization : string
}

export const TokenIsValidMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { authorization } = req.headers as RequestControllerType;
  if (!authorization) {
    res.status(404).json({ message: 'Token undefined' });
    return;
  }

  const token = new TokenFormatIsValid().getToken(authorization);
  if (!token) {
    res.status(404).json({ message: 'Invalid Token Format' });
    return;
  }

  const payload = new TokenDecode().decode(token);
  if (!payload) {
    res.status(404).json({ message: 'Token caduced' });
    return;
  }

  req.body.user_id = payload.user_id;
  req.body.user_type = payload.user_type;

  next();
};
