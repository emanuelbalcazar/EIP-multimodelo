/**
 * Connection example.
 * Simple connection example from orientjs to orientdb.
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

const query = "SELECT Version FROM DBInfo";

// execute the promises chain.
db.open()
    .then(db => executeQuery(query))
    .then(showQueryResult)
    .then(close);

/**
 * @param {String} query to execute.
 * @returns query results.
 */
function executeQuery(query) {
    return db.query(query);
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
    }).catch((err) => {
        console.error('\nDisconnection error:', err);
        return false;
    });
}
