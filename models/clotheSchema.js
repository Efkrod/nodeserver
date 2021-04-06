const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clotheSchema = new Schema({
    nombre: String,
    color: String
});

//modelo

const clothes = mongoose.model('clothes',clotheSchema);
module.exports = clothes;