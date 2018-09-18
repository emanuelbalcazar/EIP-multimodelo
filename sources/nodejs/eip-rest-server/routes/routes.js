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

router.get('/grafo', (req, res) => {
    let nodos = [];
    let arcos = [];

    ejecutar().then(resultados => {
        console.log(resultados)
    });
});

async function ejecutar() {
    let profesores = await obtenerProfesores();
    let alumnos = await obtenerAlumnos();
    let cursos = await obtenerCursos();
    let dictados = await obtenerDictados();
    let matriculas = await obtenerMatriculas();

    return [profesores, alumnos, cursos, dictados, matriculas];
}

async function obtenerProfesores() {
    let profesores = 'SELECT FROM Profesor';
    let resultado = await executeQuery(profesores);
    return resultado;
}

async function obtenerAlumnos() {
    let alumnos = 'SELECT FROM Alumno';
    let resultado = await executeQuery(alumnos);
    return resultado;
}

async function obtenerCursos() {
    let cursos = 'SELECT FROM Curso';
    let resultado = await executeQuery(cursos).then(registros => { return registros; });;
    return resultado;
}

async function obtenerDictados() {
    let dicta = 'SELECT FROM Dicta';
    let resultado = await executeQuery(dicta).then(registros => { return registros; });;
    return resultado;
}

async function obtenerMatriculas() {
    let matriculadoEn = 'SELECT FROM matriculadoEn';
    let resultado = await executeQuery(matriculadoEn).then(registros => { return registros; });;
    return resultado;
}

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

