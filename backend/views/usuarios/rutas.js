import Express from 'express';
import { queryAllUsuarios, crearUsuario, editarUsuario, eliminarUsuario, consultarUsuario } from '../../controllers/usuarios/controller.js';

const rutasUsuario = Express.Router();

const genericCallback = (res) => (err, result) => {
    if (err) {
        res.status(500).send('error consultando los usuarios');
    } else {
        res.json(result);
    }
};

rutasUsuario.route('/usuario').get((req, res) => {
    console.log('alguien hizo get en la ruta /usuario');
    queryAllUsuarios(genericCallback(res));
});

rutasUsuario.route('/usuario/:id').get((req, res) => {
    console.log('alguien hizo get en la ruta /usuario');
    consultarUsuario(req.params.id, genericCallback(res));
});

rutasUsuario.route('/usuario').post((req, res) => {
    crearUsuario(req.body, genericCallback(res));
});

rutasUsuario.route('/usuario/:id').patch((req, res) => {
    editarUsuario(req.params.id, req.body, genericCallback(res));
});

rutasUsuario.route('/usuario/:id').delete((req, res) => {
    eliminarUsuario(req.params.id, genericCallback(res));
});

export default rutasUsuario;