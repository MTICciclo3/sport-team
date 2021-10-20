const express = require ("express");
const router = express.Router();

const UsuariosController = require("../controllers/usuarios") ;

router.get("", UsuariosController.getUsuarios);
router.post("");

module.exports = router