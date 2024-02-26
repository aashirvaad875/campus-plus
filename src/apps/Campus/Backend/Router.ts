import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import { Router as ExpressRouter } from 'express';
import helmet from 'helmet';

export const Router = (apiRouter: ExpressRouter): ExpressRouter => {
  const router = ExpressRouter();

  router
    .use(helmet())
    .use(cors())
    .use(bodyParser.json())
    .use(
      bodyParser.urlencoded({
        extended: false
      })
    )
    .use(compression());
  router.use(apiRouter);

  return router;
};
