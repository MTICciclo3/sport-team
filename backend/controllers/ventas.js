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
        //fecha: req.body.fecha,
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

exports.getVentaId = (req, res) => {
    Venta.findById(req.params.id).then((ventaResult) => {
        if (ventaResult) {
            res.status(200).json(ventaResult);
        } else {
            res.status(404).json("Venta no encontrado");
        }
    });
};

exports.deleteVenta = (req, res) => {
    const id = req.params.id;
    Venta.deleteOne({ _id: id }).then((ventaResult) => {
        res.status(200).json("La venta se eliminó satisfactoriamente.");
    });
};

exports.editVenta = (req, res) => {
    const id = req.params.id;

    const ventaUpd = new Venta({
        _id: id,
        nombre: req.body.nombre,
        description: req.body.description,
        estado: req.body.estado,
        valor: req.body.valor,
        url: req.body.url,
    });
    console.log(ventaUpd);

    Venta.findByIdAndUpdate(id, ventaUpd).then((ventaResult) => {
        res.status(200).json("La venta se actualizó satisfactoriamente");
    });
};