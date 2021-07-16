import { NextFunction, Request, Response } from 'express';

export interface Controller {
  start(
    request: Request,
    response: Response,
    next?: NextFunction
  ): Promise<any>;
}
