const express = require ("express");
const router = express.Router();

const VentasController = require("../controllers/ventas") ;

router.get("", VentasController.getVentas); //Listar ventas
router.post("", VentasController.addVenta); //Crear venta

module.exports = router