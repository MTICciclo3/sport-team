var express = require('express'); //Esta línea hace el import, va a buscar los archivos de expreess en node_modules
var app = express();
var mongoose = require('mongoose')


const productsRoutes = require ("./routes/productos");
const ventasRoutes = require ("./routes/ventas");
//const usuariosRoutes = require ("./routes/usuarios");


app.use(express.json()); //Acceder al body del metodo post
app.use(express.urlencoded({ extended: false}));


mongoose.connect("mongodb+srv://inventario:inventariosportteam@cluster0.j53jc.mongodb.net/inventario?retryWrites=true&w=majority").then(() => {
    console.log("Conectados a la base de datos inventario")
});

app.use("/api/products", productsRoutes);
app.use("/api/ventas", ventasRoutes);
//app.use("/api/usuarios", usuariosRoutes);

module.exports = app;