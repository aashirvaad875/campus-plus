import { type Configuration } from '..';

const TEST: Configuration = {
  NODE_ENV: 'test',
  PORT: 4000,
  APP_NAME: 'test campus plus application',
  DATABASE_URL: 'postgresql://webandapp:webandapp@127.0.0.1/campus_plus',
  APP_LOG_LEVEL: 'debug',
  APP_COGNITO: {
    USER_POOL_ID: 'test-central-1_testUserPool',
    CLIENT_ID: 'testCognitoClientId',
    REGION: 'test-central-1'
  }
};

export default TEST;
