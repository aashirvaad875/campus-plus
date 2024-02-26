/* eslint-disable @typescript-eslint/no-unsafe-argument */

import express from 'express';
import * as http from 'http';
import swaggerUi from 'swagger-ui-express';
import { Configuration } from '../../../../config/index';
import swaggerDocument from '../../../../swaggerApi.json';
import { ServerLogger } from '../../../Context/Shared/infrastructure/WistonLogger';

export class Server {
  private readonly express: express.Application;
  private http: http.Server | any;

  constructor(
    private router: express.Router,
    private logger: ServerLogger,
    private config: Configuration
  ) {
    this.express = express();
    this.express.use(this.logger.stream());
    this.express.use(this.router);
    // this.express.use(bodyParser.json());
    // this.express.use(bodyParser.urlencoded({ extended: true }));
    // this.express.use(helmet.xssFilter());
    // this.express.use(helmet.noSniff());
    // this.express.use(helmet.hidePoweredBy());
    // this.express.use(helmet.frameguard({ action: 'deny' }));
    // this.express.use(compression());
    // this.express.use(this.logger.stream());
    // this.express.use(cors());
    // this.express.use(ApiRouter);
    this.express.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    // errorHandlers.forEach(errorHandler => errorHandler(this.express._router, this.logger));
  }

  async listen(): Promise<void> {
    return new Promise(resolve => {
      this.http = this.express.listen(this.config.PORT, () => {
        this.logger.info(`🚀 Application s runnings at http://localhost:${this.config.PORT} in ${this.config.NODE_ENV} mode`);
        console.log('  Press CTRL-C to stop\n');
        resolve();
      });
    });
  }

  getHTTPServer(): http.Server<typeof http.IncomingMessage, typeof http.ServerResponse> {
    return this.http;
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.http) {
        this.http.close((error: any) => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }

      return resolve();
    });
  }
}
