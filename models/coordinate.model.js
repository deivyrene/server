const mongoose = require('mongoose');
require('mongoose-double')(mongoose);
const Schema = mongoose.Schema;

let CoordinateSchema = new Schema({
    lat: {type: Number, required: true },
    lng: {type: Number, required: true },
    description: {type: String, required: true}
});

module.exports = mongoose.model('Coordinate', CoordinateSchema);