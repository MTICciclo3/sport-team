const mongoose = require("mongoose");

const venta = mongoose.Schema({
    nombre: { type: String, required: true},
    apellido: { type: String, required: true},
    documento : { type: Number, required: true },
    //fecha: { type: Date },
    vendedorId: { type: Number, required: true},
    producto: { type: String, required: true},
    cantidad: { type: Number, required: true},
    total: { type: Number, required: true},
});

module.exports = mongoose.model("Venta", venta)