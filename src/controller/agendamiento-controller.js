const agendamientoCtr = {};
const agendamientoModel = require('../models/agendamiento-model')
// const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Crear Agendamiento
agendamientoCtr.crearAgendamiento = async(req, res) => {
    const {fechaSolicitud, nombres, apellidos, placa, servicio, correo, telefono, comentarios} = req.body
    const nuevoAgendamiento = new agendamientoModel({
        fechaSolicitud,
        nombres,
        apellidos,
        placa, 
        servicio,
        correo,
        telefono, 
        comentarios,
    })

    const validacionDisponibilidad = await agendamientoModel.findOne({fechaSolicitud:fechaSolicitud})
    if(validacionDisponibilidad){
        res.json({
            mensaje: 'La fecha u hora no se encuentra disponible. Intenta en otra hora u otro día'
        })
    }
    else{
        await nuevoAgendamiento.save()

        res.json({
            mensaje: 'Agendamiento realizado',
            id: nuevoAgendamiento._id
        })
    }
    

}

// Listar Agendamiento
agendamientoCtr.listarAgendamiento = async(req, res) => {
    const respuesta = await agendamientoModel.find()
    res.json(respuesta)
}


// Actualizar Agendamiento
agendamientoCtr.actualizarAgendamiento = async(res, req) => {
    const fechaSolicitud = req.params.fechaSolicitud
    await agendamientoModel.findByIdAndUpdate({fechaSolicitud:fechaSolicitud},req.body)
    const respuesta = agendamientoModel.findById({fechaSolicitud:fechaSolicitud})
    res.json({
        mensaje: 'El servicio fue reprogramado con exito',
        respuesta
    })
}


module.exports = agendamientoCtr