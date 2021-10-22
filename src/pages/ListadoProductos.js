import React, { useEffect, useState } from 'react';
import {Table, TableHead, TableData, Boton, ContenedorBotonCentrado, TableRow} from 'elements/Listas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenAlt, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import * as api from 'Api';
import './index1.css';



const ListadoProductos = () => {

  const [productos, setProductos] = useState([]);
  

  const listProductos = async()=>{
    try{
      const res = await api.listProduct();
      setProductos(res.data)

    }catch(error){
      console.log(error)
    }
  };

  useEffect(()=>{
    listProductos();
  },[]);

  const history = useHistory();

  const handleDelete= async (productId)=>{
    await api.deleteProduct(productId);
    listProductos();
  };

  const [busqueda, setBusqueda] = useState('');
  const [productosFiltrados, setproductosFiltrados] = useState(productos);

  useEffect(() => {
    setproductosFiltrados(
      productos.filter((elemento) => {
        return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, productos]);

  return (
    <main className="mainContainerTable">
      <ContenedorBotonCentrado>
        <Boton>
          <Link to="/CrearProductos">Agregar</Link>
        </Boton>
      </ContenedorBotonCentrado>
      <h2 className="tituloGestionVentas">Todos los productos</h2>
      <input className = "inputBusqueda"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder='Buscar'
      />
      <Table>
        <TableHead>
          <tr>
            <TableData>Producto</TableData>
            <TableData>Estado</TableData>
            <TableData>Imagen</TableData>
            <TableData>Descripcion</TableData>
            <TableData>Valor</TableData>
            <TableData>Actualizar</TableData>
          </tr>
        </TableHead>
        <tbody>
          {productosFiltrados.map((productos) =>(
              <TableRow key={productos._id}>
              <TableData>{productos.nombre}</TableData>
              <TableData>{productos.Estado.label}</TableData>
              <TableData > <img src={productos.urlimagen}/> </TableData>
              <TableData>{productos.descripcion}</TableData>
              <TableData>{productos.valor}</TableData>
              <TableData>
                <button className="iconSide" onClick={() => {
                  history.push(`/editarProductos/${productos._id}`)}}
                >
                  <FontAwesomeIcon  icon={faPenAlt}/>
                </button>
                <button className="iconSide" onClick={()=>handleDelete(productos._id)}>
                  <FontAwesomeIcon icon={faTrashAlt}/>
                </button>
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </main>
  );
};

export default ListadoProductos;