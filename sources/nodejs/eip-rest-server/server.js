// server.js - configure and start the application.
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// create our app with express.
const app = express();

// configure all environments.
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

// static files.
app.use(express.static(path.join(__dirname, 'public')));

// declare all routes.
const routes = require('./routes/routes');
app.use(routes);

// set host and port.
app.set('host', "http://localhost");
app.set('port', 2005);

// listening application.
app.listen(app.get('port'), () => {
    console.log('[*] - EIP server example started in %s:%s', app.get('host'), app.get('port'));
});
