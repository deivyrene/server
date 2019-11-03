const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://mongodb:mongodb@cluster0-hvurj.mongodb.net/event-maps?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Se produjo un error al conectar.'));