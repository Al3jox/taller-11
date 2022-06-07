const mongoose = require('mongoose');
const {Schema} = mongoose

const servicioSchema = new Schema({
    nombre: String, 
    descripcion: String,  
    tiempoEstimado: Number, 
    precio: Number,
    linkImg: String
    // placa: String,
    // fechaRealizacionServicio: {type: Date}
})

module.exports = mongoose.model('servicios', servicioSchema)