const express = require ("express");
const router = express.Router();

const VentasController = require("../controllers/ventas") ;

router.get("", VentasController.getVentas); //Listar ventas
router.post("", VentasController.addVenta); //Crear venta
router.delete("/:id", VentasController.deleteVenta); //Borrar venta
router.get("/:id", VentasController.getVentaId); //Obtener venta por id
router.put("/:id", VentasController.editVenta); //Actualizar venta


module.exports = router