import { Request, Response } from 'express';

export class HealthCheckController {
  public async invoke(_req: Request, res: Response): Promise<Response> {
    return Promise.resolve(res.json({}));
  }
}
