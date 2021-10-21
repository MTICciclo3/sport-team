import axios from 'axios';

const API_URL = "http://localhost:3001/usuario"

export const listUsuarios = async () => {
    return await axios.get(API_URL);

  };

export const registerUser = async (newUser) =>{
    try{
        const response  = await axios({
            url:`${API_URL}`,
            method:'POST',
            data:{
                nombre: newUser.nombre,
                apellido: newUser.apellido,
                documento: newUser.documento,
                Rol: newUser.Rol,
                Estado: newUser.Estado
            },
        })
        return response;
    } catch(e){
        console.log(e);
    }
};


export const getUsuario = async (usuarioId) =>{
    try{
        const response  = await axios({
            url:`${API_URL}/${usuarioId}`,
            method:'GET',
        })
        return response;
    } catch(e){
        console.log(e);
    }
};

export const deleteUser = async (usuarioId) =>{
    try{
        const response  = await axios({
            url:`${API_URL}/${usuarioId}`,
            method:'DELETE',
            data: { id: usuarioId},
        })
        return response;
    } catch(e){
        console.log(e);
    }
};

export const updateUser = async (usuarioId, updateUser) =>{
    try{
        const response  = await axios({
            url:`${API_URL}/${usuarioId}`,
            method:'PATCH',
            data:{
                nombre: updateUser.nombre,
                apellido: updateUser.apellido,
                documento: updateUser.documento,
                Rol: updateUser.Rol,
                Estado: updateUser.Estado
            },
        })
        return response;
    } catch(e){
        console.log(e);
    }
};