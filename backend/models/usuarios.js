const mongoose = require("mongoose");

const usuarioSchema = mongoose.Schema({
    email: { type: String, required: true},
    activo: { type: Boolean},
    nombre: { type: String, required: true},
});

module.exports = mongoose.model("Usuario", usuarioSchema)