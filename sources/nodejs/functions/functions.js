/**
 * Example of creating a function.
 * @author Emanuel Balcazar
 */
const ODatabase = require('orientjs').ODatabase;

// initialize a database instance
const db = new ODatabase({
    host: 'localhost',
    port: 2424,
    username: 'admin',
    password: 'admin',
    name: 'demodb'
});

const functionName = 'toUpperCase';
const text = 'escuela de informatica';

// execute the promises chain.
db.open()
    .then(getFunctionClass)
    .then(OFunction => createUpperCase(OFunction, functionName))
    .then(() => executeUpperCase(text))
    .then(showQueryResult)
    .then(close)
    .catch((err) => {
        console.error('\nError:', err);
    });

/**
 * @returns OFunction class as object.
 */
function getFunctionClass() {
    return db.class.get('OFunction');
}

/**
 * Create the upperCase function.
 * @param {Object} OFunction
 * @param {String} functionName
 */
function createUpperCase(OFunction, functionName) {
    return OFunction.find({ name: functionName }).then((result) => {
        if (!result.length) {
            db.createFn(functionName, (text) => {
                return text.toUpperCase();
            });
        }
    });
}

/**
 * Execute toUpperCase function.
 * @param {String} text
 * @returns query results.
 */
function executeUpperCase(text) {
    return db.query('SELECT toUpperCase(:text) as result', { params: { text: text } });
}

/**
 * @param {Array} results
 */
function showQueryResult(results) {
    console.log('\nQuery results:', results);
}

/**
 * Closes the connection to the database.
 */
function close() {
    db.close().then(() => {
        console.log('\nConnection closed!');
        return true;
    });
}
