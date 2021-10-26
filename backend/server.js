import Express from "express";
import cors from 'cors'; 
import dotenv from 'dotenv';
import { conectarBD } from './db/db.js';
import rutasUsuario from './views/usuarios/rutas.js';
import rutasProductos from './views/productos/rutas.js';
import rutasVenta from './views/ventas/rutas.js';

dotenv.config({path: './.env'});

const app = Express();

app.use(Express.json());
app.use(cors());
app.use(rutasUsuario);
app.use(rutasProductos);
app.use(rutasVenta);

const main = () => {
    return app.listen(process.env.PORT = 3001, () => {
        console.log(`escuchando puerto ${process.env.PORT}`);
    });
};

conectarBD(main);
