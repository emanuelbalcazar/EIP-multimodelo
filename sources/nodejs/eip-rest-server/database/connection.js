/**
 * Database connection module.
 */
const ODatabase = require('orientjs').ODatabase;

// initialize a database instance
const db = new ODatabase({
    host: 'localhost',
    port: 2424,
    username: 'root',
    password: 'root',
    name: 'eip'
});

module.exports = db;
