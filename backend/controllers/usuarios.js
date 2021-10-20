const Usuario = require('../models/usuarios');

exports.getUsuarios = (req, res) => {
    Usuario.find().then((usuarioResults) => {
        res.status(200).json(usuarioResults) 
    })
    
};