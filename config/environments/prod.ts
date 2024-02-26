import { type Configuration } from '../';

const PRO: Configuration = {
  NODE_ENV: process.env.NODE_ENV || 'production',
  PORT: +(process.env.PORT || 3000),
  APP_NAME: process.env.APP_NAME || 'campus plus application',
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://webandapp:webandapp@127.0.0.1/campus_plus',
  APP_LOG_LEVEL: process.env.APP_LOG_LEVEL || 'info',
  APP_COGNITO: {
    USER_POOL_ID: process.env.COGNITO_USER_POOL || '',
    CLIENT_ID: process.env.COGNITO_CLIENT_ID || '',
    REGION: process.env.COGNITO_REGION || ''
  }
};

export default PRO;
