// import { Router } from 'express';
// import HealthCheckController from '../controllers/HealthCheck/HealthCheckController';

import { Router } from 'express';

// const router = Router();

// // Controller
// const controller: HealthCheckController = HealthCheckController.run.bind(postAuthenticationController);

// // Routes
// router.get(
//   '/',
//   controller.run.bind(controller)
//   /*#swagger.tags = ['Health Check']
//    */
// );

// export const HealthCheckRoutes = router;
import * as controllers from '../controllers';

export const ApiRouter = (healthCheckController: controllers.HealthCheckController): Router => {
  const apiRouter = Router();
  apiRouter.get('/health_check', healthCheckController.invoke.bind(healthCheckController));
  apiRouter.use('/api');
  return apiRouter;
};
