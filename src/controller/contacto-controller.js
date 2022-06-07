const contactoCtr = {};
const contactoModel = require('../models/contacto-model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const req = require('express/lib/request')

// Crear Contacto
contactoCtr.crearContacto = async(req, res) => {
    const {nombres, email, telefono, observaciones} = req.body
    const nuevoContacto = new contactoModel({
        nombres, 
        email, 
        telefono,
        observaciones,
    })

    await nuevoContacto.save()
    res.json({
        mensaje: 'Mensaje enviado con exito!',
        id: nuevoContacto._id
    })
    
}

// Listar Contacto
contactoCtr.listarContacto = async(req, res) => {
    const respuesta = await contactoModel.find()
    res.json(respuesta)
}

module.exports = contactoCtr