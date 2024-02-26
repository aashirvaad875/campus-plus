/* eslint-disable @typescript-eslint/explicit-function-return-type */

import express from 'express';
import { Configuration } from '../../../../config/index';
import { ServerLogger } from '../../../Context/Shared/infrastructure/WistonLogger';
import { Server } from './Server';

export class CampusPlusApp {
  server?: Server;
  logger: ServerLogger;
  config: Configuration;
  router: express.Router;

  constructor(logger: ServerLogger, config: Configuration, router: express.Router) {
    this.logger = logger;
    this.config = config;
    this.router = router;
  }

  async start() {
    this.server = new Server(this.router, this.logger, this.config);
    // await this.connectDB();
    return this.server.listen();
  }

  // private async connectDB(): Promise<void> {
  //   container.get('CampusPlus.ConnectionManager');
  // }

  get httpServer() {
    return this.server?.getHTTPServer();
  }

  async stop() {
    return this.server?.stop();
  }
}
