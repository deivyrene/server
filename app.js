require('./db.js');

const express = require('express');
const bodyParser = require('body-parser');
const coordinate = require('./routes/coordinate.route');
const app = express();

var server = app.listen(1234);
var io = require('socket.io').listen(server);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/coordinates', coordinate);

app.set('io', io);

io.on('connection', (socket) => {
    console.log('Conectado SocketIO');
});

app.listen();