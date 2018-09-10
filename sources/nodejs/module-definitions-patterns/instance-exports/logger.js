/**
 * Simple logger example.
 * @class Logger
 * @author Carlos Emanuel Balcazar
 */
class Logger {

    constructor() {

    }

    info(message) {
        log('info', message);
    }

    error(message) {
        log('error', message);
    }

    verbose(message) {
        log('verbose', message);
    }

    debug(message) {
        log('debug', message);
    }
}

function log(level, message) {
    console.log(`[${level}] - ${message}`);
}

// the instance is exported.
module.exports = new Logger();
