import axios from 'axios';

const API_URL = "http://localhost:3001/venta"

export const listaVentas = async () => {
    return await axios.get(API_URL);

  };

export const registerVenta = async (newVenta) =>{
    try{
        const response  = await axios({
            url:`${API_URL}`,
            method:'POST',
            data:{
                fecha: newVenta.fecha,
                nombre: newVenta.nombre,
                apellido: newVenta.apellido,
                documento: newVenta.documento,
                idVendedor: newVenta.idVendedor,
                cantidadProducto: newVenta.cantidadProducto,
                listaCanasta: newVenta.listaCanasta,
            },
        })
        return response

    } catch(e){
        console.log(e)
    }
}

export const getVenta = async (idVenta) =>{
    try{
        const response  = await axios({
            url:`${API_URL}/${idVenta}`,
            method:'GET',
        })
        return response

    } catch(e){
        console.log(e)
    }
}

export const deleteVenta = async (idVenta) =>{
    try{
        const response  = await axios({
            url:`${API_URL}/${idVenta}`,
            method:'DELETE',
            data: { id: idVenta},
        })
        return response

    } catch(e){
        console.log(e)
    }
};

export const updateVenta = async (idVenta, updateVenta) =>{
    try{
        const response  = await axios({
            url:`${API_URL}/${idVenta}`,
            method:'PATCH',
            data:{
                fecha: updateVenta.fecha,
                nombre: updateVenta.nombre,
                apellido: updateVenta.apellido,
                documento: updateVenta.documento,
                idVendedor: updateVenta.idVendedor,
                cantidadProducto: updateVenta.cantidadProducto,
                producto: updateVenta.producto
            },
        })
        return response

    } catch(e){
        console.log(e)
    }
};