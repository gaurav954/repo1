var n = 3;
var b = 0;

try {
    var c = n / b;
    if (c == Infinity)
        throw new Error('This error is caused by invalid operation');
}
catch (err) {
    var log4js = require('log4js');
    var logger = log4js.getLogger();
    logger.error(err);
}