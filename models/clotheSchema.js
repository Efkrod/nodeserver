const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clotheSchema = new Schema({
    nombre: String,
    color: String
});

//modelo
//'clothes' ruta
const clothes = mongoose.model('clothes',clotheSchema);
module.exports = clothes;