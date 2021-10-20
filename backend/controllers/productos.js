const Producto = require('../models/productos');

exports.getProducts = (req, res) => {
    Producto.find().then((productoResult) => {
        res.status(200).json(productoResult) //todos los producto
    })

};