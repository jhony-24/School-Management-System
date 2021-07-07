import { Request, Response, Router } from 'express';

export default function api() {
  const router = Router();

  router.get('/users', async (_req: Request, res: Response) => {
    return res.json({});
  });

  return router;
}
