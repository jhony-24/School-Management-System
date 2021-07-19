import { NextFunction, Request, Response } from 'express';

import TokenDecode from '@services/TokenDecode';
import TokenFormatIsValid from '@services/TokenFormatIsValid';

export const TokenIsValidMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    res.status(404).json({ message: 'Token undefined' });
    return;
  }

  const token = new TokenFormatIsValid().getToken(authorization as string);
  if (!token) {
    res.status(404).json({ message: 'Invalid Token Format' });
    return;
  }

  const payload = new TokenDecode().decode(token);
  if (!payload) {
    res.status(404).json({ message: 'Token caduced' });
    return;
  }

  req.body.userId = payload.userId;
  req.body.userType = payload.userType;

  next();
};
