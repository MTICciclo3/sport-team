const Venta = require("../models/ventas");

exports.getVentas = (req, res) => {
    Venta.find().then((ventasResult) => {
        res.status(200).json(ventasResult) //todos los producto
    })
};

exports.addVenta = (req, res) => {
    const ventaAdd = new Venta({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        documento: req.body.documento,
        fecha: req.body.fecha,
        vendedorId: req.body.vendedorId,
        producto: req.body.producto,
        cantidad: req.body.cantidad,
        total: req.body.total,
    });

    ventaAdd.save().then((createdVenta) => {
        console.log(createdVenta);
        res.status(201).json("Venta creada satisfactoriamente")
    });
}