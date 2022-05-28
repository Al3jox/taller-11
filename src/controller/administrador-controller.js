const adminCtr = {};
const adminModel = require('../models/administrador-model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Crear Admin
adminCtr.crearAdmin = async(req, res) => {
    const {nombres, apellidos, documento, telefono, email, contrasena} = req.body
    const nuevoAdmin = new adminModel({
        nombres,
        apellidos, 
        documento, 
        telefono, 
        email, 
        contrasena
    })

    const emailAdmin = await adminModel.findOne({email:email})
    if(emailAdmin){
        res.json({
            mensaje: 'El Administrador ya se encuentra creado'
        })
    }
    else{
        nuevoAdmin.contraseña = await bcrypt.hash(contrasena, 10)
        const token = jwt.sign({_id:contrasena._id}, 'Secreta')
        await nuevoAdmin.save()
        res.json({
            mensaje: 'Bienvenido Admin',
            id: nuevoAdmin._id,
            nombres: nuevoAdmin.nombres,
            token
        })
    }

}

adminCtr.login = async(req, res) => {
    const {email, contrasena} = req.body
    const admin = await adminModel.findOne({email:email})
    if(!admin){
        return res.json({
            mensaje: 'Correo incorrecto'
        })
    }

    const match = await bcrypt.compare(contrasena, admin.contrasena)
    if(match){
        const token = jwt.sign({_id:admin._id}, 'Secreta')
        res.json({
            mensaje: 'Bienvenido',
            id: admin._id,
            nombres: admin.nombres,
            token
        })
    }

    else{
        res.json({
            mensaje: 'Contraseña incorrecta'
        })
    }

}

 module.exports = adminCtr