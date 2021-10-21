import Express from 'express';
import { queryAllVentas, crearVenta, editarVenta, eliminarVenta, consultarVenta} from '../../controllers/ventas/controller.js';

const rutasVenta = Express.Router();

const genericCallback = (res) => (err, result)=>{
    if(err){
        res.status(500).send('error consultando los ventas');
    }else{
        res.json(result);
    }
};

rutasVenta.route('/venta').get((req,res)=>{
    console.log('alguien hizo get en la ruta /venta');
    queryAllVentas(genericCallback(res));
});

rutasVenta.route('/venta/:id').get((req,res)=>{
    console.log('alguien hizo get en la ruta /venta');
    consultarVenta(req.params.id, genericCallback(res));
});

rutasVenta.route('/venta').post((req,res)=>{
    crearVenta(req.body, genericCallback(res));
});

rutasVenta.route('/venta/:id').patch((req, res) => {
    editarVenta(req.params.id, req.body, genericCallback(res));
});

rutasVenta.route('/venta/:id').delete((req,res)=>{
    eliminarVenta(req.params.id, genericCallback(res));
});

export default  rutasVenta;