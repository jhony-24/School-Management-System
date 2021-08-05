import { GetUserByType } from '@services/mysql/GetUserByType';
import { Controller } from '@localtypes/Controller';
import { Request, Response } from 'express';
import { UserType } from '@system/types';

type RequestControllerType = {
  user_id : string,
  user_type : UserType,
  token_generated : string,
}

export class GetUserController implements Controller {
  async start(req:Request, res:Response) {
    try {
      const { user_id, user_type, token_generated } = req.body as RequestControllerType;
      const user_repository = GetUserByType[user_type];
      const user_data = await user_repository.getData(user_id);
      if (!user_data) {
        res.status(404).json({ message: 'Tipo de usuario incorrecto' });
        return;
      }
      if (!token_generated) {
        res.status(200).json({ user_data });
        return;
      }
      res.status(200).json({
        user_data,
        token_generated,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
