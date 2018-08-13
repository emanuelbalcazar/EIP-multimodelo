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

db.open()
    .then(() => {
        // execute a simple query.
        return db.query('SELECT Version FROM DBInfo');
    })
    .then((res) => {
        console.log('\nQuery result:', res);
        db.close().then(() => {
            console.log('\nConnection closed!');
        });
    });
