import { config } from '../../../../../../config/index';
import { ServerLogger } from '../../../../../../src/Context/Shared/infrastructure/WistonLogger';
import { CampusPlusApp } from '../../../../../../src/apps/Campus/Backend/CampusPlusApp';
const { BeforeAll, AfterAll } = require('@cucumber/cucumber');

let application: CampusPlusApp;

BeforeAll(async () => {
  application = new CampusPlusApp(new ServerLogger(config), config);
  await application.start();
});

AfterAll(async () => {
  await application.stop();
});

export { application };
