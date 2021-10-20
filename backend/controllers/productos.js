const Producto = require('../models/productos');

exports.getProducts = (req, res) => {
    Producto.find().then((productoResult) => {
        res.status(200).json(productoResult) //todos los producto
    })
};

exports.addProduct = (req, res) => {
    const productoAdd = new Producto({
        nombre: req.body.nombre,
        description: req.body.description,
        estado: req.body.estado,
        valor: req.body.valor,
        url: req.body.url,
    });

    productoAdd.save().then((createdProduct) => {
        console.log(createdProduct);
        res.status(201).json("Producto creado satisfactoriamente")
    });
}

exports.getProductId = (req, res) => {
    Producto.findById(req.params.id).then((productoResult) => {
        if (productoResult) {
            res.status(200).json(productoResult);
        } else {
            res.status(404).json("Producto no encontrado");
        }
    });
};

exports.deleteProduct = (req, res) => {
    const id = req.params.id;
    Producto.deleteOne({ _id: id }).then((productoResult) => {
        res.status(200).json("El producto se eliminó satisfactoriamente.");
    });
};

exports.editProduct = (req, res) => {
    const id = req.params.id;

    const productoUpd = new Producto({
        _id: id,
        nombre: req.body.nombre,
        description: req.body.description,
        estado: req.body.estado,
        valor: req.body.valor,
        url: req.body.url,
    });
    console.log(productoUpd);

    Producto.findByIdAndUpdate(id, productoUpd).then((productoResult) => {
        res.status(200).json("El producto se actualizó satisfactoriamente");
    });
};