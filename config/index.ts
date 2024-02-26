import * as dotenv from 'dotenv';
//
dotenv.config();
//
import DEVELOPMENT from './environments/dev';
import PRODUCTION from './environments/prod';
import TEST from './environments/testing';

const { NODE_ENV } = process.env;

export interface Configuration {
  NODE_ENV: string;
  PORT: number;
  APP_NAME: string;
  DATABASE_URL: string;
  APP_LOG_LEVEL: string;
  APP_COGNITO: {
    USER_POOL_ID: string;
    CLIENT_ID: string;
    REGION: string;
  };
}

let currentConfig: Configuration = DEVELOPMENT;

switch (NODE_ENV) {
  case 'production':
    currentConfig = PRODUCTION;
    break;
  case 'test':
    currentConfig = TEST;
    break;
  default:
    currentConfig = DEVELOPMENT;
}

export { currentConfig as config };
