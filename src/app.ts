import { util } from './util/Util';
import { appService } from './services/AppService';

util.handleAsyncExceptions();
appService.run();