import { AwilixContainer, InjectionMode, asClass, asFunction, asValue, createContainer } from 'awilix';
import { config } from '../../../../../config';
import { createPrismaClient } from '../../../../Context/Shared/infrastructure/Persistence/prisma/index';
import { ServerLogger } from '../../../../Context/Shared/infrastructure/WistonLogger/index';
import { Router } from '../Router';
import { Server } from '../Server';
import { HealthCheckController } from '../controllers';
import { ApiRouter } from '../routes/health-check.route';

export class Container {
  static invoke() {
    throw new Error('Method not implemented.');
  }
  private readonly container: AwilixContainer;

  constructor() {
    this.container = createContainer({ injectionMode: InjectionMode.CLASSIC });
    this.register();
  }

  public register(): void {
    this.container
      .register({
        //core components
        server: asClass(Server).singleton(),
        config: asValue(config),
        router: asFunction(Router).singleton(),
        logger: asClass(ServerLogger).singleton(),
        db: asFunction(createPrismaClient).singleton()
      })
      .register({
        apiRouter: asFunction(ApiRouter).singleton()
      })
      .register({
        healthCheckController: asClass(HealthCheckController).singleton()
      });
  }

  public invoke(): AwilixContainer {
    return this.container;
  }
}
