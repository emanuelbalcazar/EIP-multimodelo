// Las funciones publicas se exportan utilizando 'exports.functionName' o 'module.exports.functionName'.
exports.info = (message) => {
    log('info', message);
};

exports.error = (message) => {
    log('error', message);
};

exports.verbose = (message) => {
    log('verbose', message);
};

exports.debug = (message) => {
    log('debug', message);
};

function log(level, message) {
    console.log(`[${level}] - ${message}`);
}
