import { NextFunction, Request, Response } from 'express';

import TokenIsCaduced from '@services/TokenIsCaduced';
import TokenFormatIsValid from '@services/TokenFormatIsValid';

const TokenIsValidMiddleware = (
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

  const token_is_caduced = new TokenIsCaduced().isCaduced(token);
  if (token_is_caduced) {
    res.status(404).json({ message: 'Token caduced' });
    return;
  }

  next();
};

export default TokenIsValidMiddleware;
