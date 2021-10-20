import axios from 'axios';

const API_URL = "http://localhost:5000/producto"

export const listProduct = async () => {
    return await axios.get(API_URL);

  };

export const registerProducts = async (newProduct) =>{
    try{
        const response  = await axios({
            url:`${API_URL}`,
            method:'POST',
            data:{
                nombre: newProduct.nombre,
                descripcion: newProduct.descripcion,
                valor: newProduct.valor,
                Estado: newProduct.Estado
            },
        })
        return response

    } catch(e){
        console.log(e)
    }
}

export const getProduct = async (productId) =>{
    try{
        const response  = await axios({
            url:`${API_URL}/${productId}`,
            method:'GET',
        })
        return response

    } catch(e){
        console.log(e)
    }
}

export const deleteProduct = async (productId) =>{
    try{
        const response  = await axios({
            url:`${API_URL}/${productId}`,
            method:'DELETE',
            data: { id: productId},
        })
        return response

    } catch(e){
        console.log(e)
    }
}

export const updateProduct = async (productId, updateProduct) =>{
    try{
        const response  = await axios({
            url:`${API_URL}/${productId}`,
            method:'PATCH',
            data:{
                nombre: updateProduct.nombre,
                descripcion: updateProduct.descripcion,
                valor: updateProduct.valor,
                Estado: updateProduct.Estado
            },
        })
        return response

    } catch(e){
        console.log(e)
    }
};