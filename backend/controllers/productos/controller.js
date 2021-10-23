import { getDB } from '../../db/db.js';
import {ObjectId} from 'mongodb';

const queryAllProductos = async (callback) =>{
    const baseDeDatos = getDB();
    await baseDeDatos.collection('producto').find().limit(50).toArray(callback);
};

const consultarProducto = async (id, callback) =>{
    const baseDeDatos = getDB();
    await baseDeDatos.collection('producto').findOne({_id: new ObjectId(id)}, callback);
}

const crearProducto = async (datosProducto, callback) =>{
    const baseDeDatos = getDB();    
    if(
        Object.keys(datosProducto).includes("nombre") &&
        Object.keys(datosProducto).includes("descripcion") &&
        Object.keys(datosProducto).includes("valor") &&
        Object.keys(datosProducto).includes("urlimagen") &&
        Object.keys(datosProducto).includes("Estado")
        
    ){
     //implementar codigo para crear producto en BD
        await baseDeDatos.collection('producto').insertOne(datosProducto, callback)
    }else{
        return "error";
        }
}

const editarProducto = async (id, edicion, callback)=>{
    const filtroProducto = { _id: new ObjectId(id) };
    const operacion = {
      $set: edicion,
    };
    const baseDeDatos = getDB();
    await baseDeDatos
      .collection('producto')
      .findOneAndUpdate(filtroProducto, operacion, { upsert: true, returnOriginal: true }, callback)     
};

const eliminarProducto = async (id, callback) => {
    const filtroProducto= { _id: new ObjectId(id) };
    const baseDeDatos = getDB();
    await baseDeDatos.collection('producto').deleteOne(filtroProducto, callback)
}


export {queryAllProductos, crearProducto, editarProducto, eliminarProducto, consultarProducto};