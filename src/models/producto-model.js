const mongoose = require('mongoose');
const {Schema} = mongoose

const productoSchema = new Schema({
    nombre: String,
    marca: String,
    descripcion: String,
    precio: Number,
    cantidad: Number,
    estadoActivo: {type: Boolean, default:true},
    fechaIngreso: {type: Date, default:Date.now}
})

module.exports = mongoose.model('producto', productoSchema)