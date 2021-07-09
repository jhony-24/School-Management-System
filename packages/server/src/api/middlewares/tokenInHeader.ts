import { Request, Response } from 'express';

const tokenInHeader = (req: Request, res: Response) => {
  // Code...
  console.log(req, res);
};

export default tokenInHeader;
