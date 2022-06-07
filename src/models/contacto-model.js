const mongoose = require('mongoose');
const {Schema} = mongoose

const contactoSchema = new Schema({

    nombres: String,
    email: String,
    telefono: String,
    observaciones: String,
    fechasolicitud: {type: Date, default:Date.now}
})

module.exports = mongoose.model('contacto', contactoSchema)