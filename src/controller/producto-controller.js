const producCtr = {};
const proveedorModel = require('../models/producto-model')

// Crear producto
producCtr.crearProduct = async(req, res) => {
    const {nombre, marca, descripcion, precio, cantidad} = req.body
    const nuevoProduct = new proveedorModel({
        nombre, 
        marca, 
        descripcion, 
        precio, 
        cantidad
    })

    await nuevoProduct.Save()
    res.json({
        mensaje: 'El producto ha sido creado con exito!'
    })

}

// Listar productos
producCtr.listarProductos = async(req, res) => {
    const respuesta = await proveedorModel.find()
    res.json(respuesta)
}

// Listar productos por ID 
producCtr.listarProductosId = async(req, res) => {
    const id = req.params.id
    const respuesta = await proveedorModel.findById({_id:id})
    res.json(respuesta)
}

// Actualizar Productos
producCtr.actualizarProduxtos = async(res, req) => {
    const id = req.params.id
    await proveedorModel.findByIdAndUpdate({_id:id},req.body)
    const respuesta = proveedorModel.findById({_id:id})
    res.json({
        mensaje: 'El producto fue actualizado con exito',
        respuesta
    })
}

// Eliminar producto
producCtr.eliminarProducto = async(req, res) => {
    const id = req.params.id
    await proveedorModel.findByIdAndRemove({_id:id})
    res.json({
        mensaje: 'El producto fue eliminado con exito!'
    })
}

module.exports = producCtr
