var redis = require('redis');
var client = redis.createClient();

const Coordinate = require('../models/coordinate.model');

exports.create = function (req, res) {
    client.del('listAll');
    const io = req.app.get('io');
    let coordinate = new Coordinate({
            lat: req.body.lat,
            lng: req.body.lng,
            description: req.body.description
    });
    coordinate.save(function (err) {
        if (err) return res.status(400).json(err.message);
        io.emit('Coordinate');
        res.status(200).json('Evento se ha creado correctamente.');
    })
};

exports.search = function (req, res) {
    client.del('search', 'listAll');
    const io = req.app.get('io');
    var like = new RegExp(req.body.description, "i")
    var query = { description: like };
    client.get('search', function (err, data) {
        if (data) {
            console.log('redis');
            res.send(data)
        } else {
            console.log('db');
            Coordinate.find(query, function (err, coodinates) {
                if (err) return res.status(400).json(err.message);
                if (coodinates != '') { 
                    client.set('search', JSON.stringify(coodinates));
                    client.set('listAll', JSON.stringify(coodinates));
                    client.expire('search', 20);
                    res.status(200).json(coodinates)
                    io.emit('Coordinate');
                } else {
                    res.status(200).json('No se encontro resultados')
                }
            });
        }
    });
};

exports.listAll = function (req, res) {
    client.get('listAll', function (err, data) {
        if (data) {
            console.log('redis');
            res.send(data)
        } else {
            console.log('db');
            Coordinate.find({}, function (err, coodinates) {
                if (err) return res.status(400).json(err.message);
                client.set('listAll', JSON.stringify(coodinates));
                client.expire('listAll', 3000);
                res.status(200).json(coodinates);
            })
        }
    });
};

exports.get = function (req, res) {
    Coordinate.find({}, function (err, coodinates) {
        if (err) return res.status(400).json(err.message);
        res.status(200).json(coodinates);
    })
};

exports.delete = function (req, res) {
    client.del('listAll');
    const io = req.app.get('io');
    Coordinate.findByIdAndRemove(req.params.id, function (err) {
        if (err) return res.status(400).json(err.message);
        res.status(200).json('Se ha eliminado correctamente!');
        io.emit('Coordinate');
    })

};