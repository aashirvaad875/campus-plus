import { ServerLogger } from 'src/Context/Shared/infrastructure/WistonLogger';
import { Configuration } from '../../../../config/index';
import { CampusPlusApp } from './CampusPlusApp';
import { Container } from './dependency-injection/Container';

try {
  const container = new Container();
  const logger = container.invoke().resolve<ServerLogger>('logger');
  const config = container.invoke().resolve<Configuration>('config');
  new CampusPlusApp(logger, config).start().catch(handleError);
} catch (e) {
  handleError(e);
}

process.on('uncaughtException', err => {
  console.log('uncaughtException', err);
  process.exit(1);
});
function handleError(e: any): void {
  console.log(e);
  process.exit(1);
}
