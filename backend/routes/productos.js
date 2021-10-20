const express = require ("express");
const router = express.Router();

const ProductController = require("../controllers/productos") ;

router.get("", ProductController.getProducts); //Listar productos
router.post("", ProductController.addProduct); //Crear productos
router.delete("/:id", ProductController.deleteProduct); //Borrar producto
router.get("/:id", ProductController.getProductId); //Obtener producto por id
router.put("/:id", ProductController.editProduct); //Actualizar producto


module.exports = router