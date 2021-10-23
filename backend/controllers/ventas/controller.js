import { getDB } from '../../db/db.js';
import {ObjectId} from 'mongodb';

const queryAllVentas = async (callback) =>{
    const baseDeDatos = getDB();
    await baseDeDatos.collection('venta').find().limit(50).toArray(callback);
};

const consultarVenta = async (id, callback) =>{
    const baseDeDatos = getDB();
    await baseDeDatos.collection('venta').findOne({_id: new ObjectId(id)}, callback);
}

const crearVenta = async (datosVenta, callback) =>{
    const baseDeDatos = getDB();    
    if(
        Object.keys(datosVenta).includes("fecha") &&
        Object.keys(datosVenta).includes("nombre") &&
        Object.keys(datosVenta).includes("apellido") &&
        Object.keys(datosVenta).includes("documento") &&
        Object.keys(datosVenta).includes("idVendedor") &&
        Object.keys(datosVenta).includes("cantidadProducto") &&
        Object.keys(datosVenta).includes("listaCanasta")
    ){
     //implementar codigo para crear venta en BD
        await baseDeDatos.collection('venta').insertOne(datosVenta, callback);
    }else{
            return "error";
        }
};

const editarVenta = async (id, edicion, callback)=>{
    const filtroVenta = { _id: new ObjectId(id) };
    const operacion = {
        $set: edicion,
    };
    const baseDeDatos = getDB();
    await baseDeDatos
    .collection('venta')
    .findOneAndUpdate(filtroVenta, operacion, { upsert: true, returnOriginal: true }, callback)     
};

const eliminarVenta = async (id, callback) => {
    const filtroVenta= { _id: new ObjectId(id) };
    const baseDeDatos = getDB();
    await baseDeDatos.collection('venta').deleteOne(filtroVenta, callback)
};


export {queryAllVentas, crearVenta, editarVenta, eliminarVenta, consultarVenta};