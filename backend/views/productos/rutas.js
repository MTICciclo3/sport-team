import Express from 'express';
import { queryAllProductos, crearProducto, editarProducto, eliminarProducto, consultarProducto} from '../../controllers/productos/controller.js';

const rutasProductos = Express.Router();

const genericCallback = (res) => (err, result)=>{
    if(err){
        res.status(500).send('error consultando los productos');
    }else{
        res.json(result);
    }
};

rutasProductos.route('/producto').get((req,res)=>{
    console.log('alguien hizo get en la ruta /producto');
    queryAllProductos(genericCallback(res));
});

rutasProductos.route('/producto/:id').get((req,res)=>{
    console.log('alguien hizo get en la ruta /producto');
    consultarProducto(req.params.id, genericCallback(res));
});

rutasProductos.route('/producto').post((req,res)=>{
    crearProducto(req.body, genericCallback(res));
});

rutasProductos.route('/producto/:id').patch((req, res) => {
    editarProducto(req.params.id, req.body, genericCallback(res));
});

rutasProductos.route('/producto/:id').delete((req,res)=>{
    eliminarProducto(req.params.id, genericCallback(res));
});

export default  rutasProductos;