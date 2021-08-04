import { GetUserServices } from '@services/mysql/GetUser';
import { Controller } from '@localtypes/Controller';
import { Request, Response } from 'express';
import { UserType } from '@system/types';

type RequestControllerType = {
  USER_ID : string,
  USER_TYPE : UserType,
  TOKEN_GENERATED : string,
}

export class GetUserController implements Controller {
  async start(req:Request, res:Response) {
    try {
      const { USER_ID, USER_TYPE, TOKEN_GENERATED } = req.body as RequestControllerType;
      const userRepository = GetUserServices[USER_TYPE];
      const USER_DATA = await userRepository.getData(USER_ID);
      if (!USER_DATA) {
        res.status(404).json({ MESSAGE: 'Tipo de usuario incorrecto' });
        return;
      }
      if (!TOKEN_GENERATED) {
        res.status(200).json({ USER_DATA });
        return;
      }
      res.status(200).json({
        USER_DATA,
        TOKEN_GENERATED,
      });
    } catch (error) {
      res.status(500).json({ MESSAGE: error.message });
    }
  }
}
