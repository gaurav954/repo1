var log4js = require('log4js');
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('E:\Work2\Apps\server01\Myapplication.log'), 'Myapplication');

var logger = log4js.getLogger('Myapplication');

logger.info('Application is running');
logger.warn('Module cannot be loaded');
logger.error('Saved data was erroe');
logger.fatal('Server could not process');
logger.debug('Some debug messages');
