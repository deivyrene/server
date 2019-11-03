const Coordinate = require('../models/coordinate.model');

exports.create = function (req, res) {
    let coordinate = new Coordinate({
            lat: req.body.lat,
            lng: req.body.lng,
            description: req.body.description
    });
    coordinate.save(function (err) {
        if (err) return res.status(400).json(err.message);
        res.status(200).json('Evento se ha creado correctamente.');
    })
};

exports.search = function (req, res) {
    var like = new RegExp(req.body.description, "i")
    var query = { description: like };
    Coordinate.find(query, function (err, coodinates) {
        if (err) return res.status(400).json(err.message);
        (coodinates != '') ? res.status(200).json(coodinates) : res.status(400).json('No se encontro resultados')
    });
};

exports.listAll = function (req, res) {
    Coordinate.find({}, function (err, coodinates) {
        if (err) return res.status(400).json(err.message);
        res.status(200).json(coodinates);
    })
};

exports.delete = function (req, res) {
    Coordinate.findByIdAndRemove(req.params.id, function (err) {
        if (err) return res.status(400).json(err.message);
        res.status(200).json('Se ha eliminado correctamente!');
    })
};