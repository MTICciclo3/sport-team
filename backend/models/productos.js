const mongoose = require("mongoose");

const producto = mongoose.Schema({
    nombre: { type: String, required: true},
    description: { type: String, required: true},
    estado: { type: Boolean},
    valor: { type: Number, required: true},
    url: { type: String, required: true},
});

module.exports = mongoose.model("Producto", producto)
