import { Request, Response } from 'express';
import { Controller } from '@localtypes/Controller';

export class SendHomework implements Controller {
  async start(req: Request, res: Response) {
    try {
    } catch (error) {
      console.log(error.message);
      res.status(404).json({ message: error.message });
    }
  }
}
