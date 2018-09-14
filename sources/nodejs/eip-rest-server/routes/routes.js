/**
 * Route application module.
 * @author Carlos Emanuel Balcazar
 */
const express = require('express');
const router = express.Router();
const connection = require('../database/connection');

// root route.
router.get('/', (req, res) => {
    let info = 'Aplicación inicializada!';
    res.send(info);
});

// get server information.
router.get('/info', (req, res) => {
    let info = { name: 'EIP server example', date: '2018' };
    res.send(info);
});

router.get('/profesores', (req, res) => {
    let query = 'SELECT FROM Profesor';

    executeQuery(query)
        .then(results => {
            res.send(results);
        });
});

router.post('/agregarProfesor', (req, res) => {
    let data = req.body;
    let query = 'INSERT INTO Profesor CONTENT ' + JSON.stringify(data);

    executeQuery(query, data)
        .then(results => {
            res.send(results);
        });
});

router.delete('/borrarProfesor', (req, res) => {
    let id = req.body.id;
    let query = 'DELETE FROM Profesor WHERE @rid = :id unsafe';

    executeQuery(query, { params: { id: id } })
        .then(results => {
            res.send(results);
        });
});

router.post('/actualizarProfesor', (req, res) => {
    let data = req.body;
    let query = 'UPDATE Profesor SET nombre = :nombre WHERE @rid = :id';

    executeQuery(query, { params: { id: data.id, nombre: data.nombre } })
        .then(results => {
            res.send(results);
        });
});

/**
 * Open, execute and close connection.
 * @param {String} query to execute.
 * @param {String} params query params.
 * @returns query results.
 */
function executeQuery(query, params = {}) {
    return connection.open()
        .then(db => db.query(query, params))
        .then(close)
        .then(results => { return results; })
        .catch(err => { return err; });
}

/**
 * Closes the connection to the database.
 */
function close(results) {
    return connection.close().then(() => {
        return results;
    }).catch((err) => {
        return err;
    });
}

module.exports = router;

