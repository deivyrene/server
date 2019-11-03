require('./db.js');
const express = require('express');
const bodyParser = require('body-parser');
const coordinate = require('./routes/coordinate.route');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/coordinates', coordinate);

let port = 1234;

app.listen(port, () => {
    console.log('Servidor en puerto ' + port);
});