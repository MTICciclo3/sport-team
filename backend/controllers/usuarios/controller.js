import { getDB } from '../../db/db.js';
import {ObjectId} from 'mongodb';

const queryAllUsuarios = async (callback) =>{
    const baseDeDatos = getDB();
    await baseDeDatos.collection('usuario').find().limit(50).toArray(callback);
};

const consultarUsuario = async (id, callback) =>{
    const baseDeDatos = getDB();
    await baseDeDatos.collection('usuario').findOne({_id: new ObjectId(id)}, callback);
}

const crearUsuario = async (datosUsuario, callback) =>{
    const baseDeDatos = getDB();    
    if(
        Object.keys(datosUsuario).includes("nombre") &&
        Object.keys(datosUsuario).includes("apellido") &&
        Object.keys(datosUsuario).includes("documento") &&
        Object.keys(datosUsuario).includes("Rol") &&
        Object.keys(datosUsuario).includes("Estado") 
    ){
     //implementar codigo para crear usuario en BD
        await baseDeDatos.collection('usuario').insertOne(datosUsuario, callback)
    }else{
        return "error";
        }
}

const editarUsuario = async (id, edicion, callback)=>{
    const filtroUsuario = { _id: new ObjectId(id) };
    const operacion = {
      $set: edicion,
    };
    const baseDeDatos = getDB();
    await baseDeDatos
      .collection('usuario')
      .findOneAndUpdate(filtroUsuario, operacion, { upsert: true, returnOriginal: true }, callback)     
};

const eliminarUsuario = async (id, callback) => {
    const filtroUsuario= { _id: new ObjectId(id) };
    const baseDeDatos = getDB();
    await baseDeDatos.collection('usuario').deleteOne(filtroUsuario, callback)
}


export {queryAllUsuarios, crearUsuario, editarUsuario, eliminarUsuario, consultarUsuario};