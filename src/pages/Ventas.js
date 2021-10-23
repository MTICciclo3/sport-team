import React, { useEffect, useState } from 'react';
import {Table, TableHead, TableData, Boton, ContenedorBotonCentrado, TableRow} from 'elements/Listas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenAlt, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import * as apiventas from './ApiVentas';

  const Ventas = () => {
    const [ventas, setVentas] = useState([]);
    const history = useHistory();
    
    const listaVentas = async()=> {
      try{
        const res = await apiventas.listaVentas();
        setVentas(res.data)
      }catch(error){
        console.error(error);
      }
    };
    
    useEffect(() => {
      listaVentas();
    }, []);

   //const history = useHistory();

    const handleDelete = async (idVenta)=>{
      await apiventas.deleteVenta(idVenta);
      listaVentas();
    };

    const [busqueda, setBusqueda] = useState('');
    const [ventasFiltradas, setVentasFiltradas] = useState(ventas);
    
    useEffect(() => {
      setVentasFiltradas(
        ventas.filter((elemento) =>{
          return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
        })
      );
    }, [busqueda, ventas]);
    
    return(
      <main className="mainContainerTable">
        <ContenedorBotonCentrado>
          <Boton>
            <Link to ="/CrearVentas">Crear venta</Link>
          </Boton>
        </ContenedorBotonCentrado>
        <h2 className="tituloGestionVentas">Todas las ventas</h2>
        <input className="inputBusqueda"
          value={busqueda}
          onChange={(e)=> setBusqueda(e.target.value)}
          placeholder="Buscar"
        />
       <Table>
          <TableHead>
            <tr>
              <TableData>Id compra</TableData>
              <TableData>Fecha</TableData>
              <TableData>Nombre del cliente</TableData>
              <TableData>Apellido del cliente</TableData>
              <TableData>Documento del cliente</TableData>
              <TableData>Id Vendedor</TableData>
              <TableData>Valor Compra</TableData>
              <TableData>Actualizar</TableData>
            </tr>
          </TableHead>
          <tbody>
              {ventasFiltradas.map((ventas) =>(
                <TableRow key={ventas._id}>
                  <TableData>{ventas._id}</TableData>
                  <TableData>{ventas.fecha}</TableData>
                  <TableData>{ventas.nombre}</TableData>
                  <TableData>{ventas.apellido}</TableData>
                  <TableData>{ventas.documento}</TableData>
                  <TableData>{ventas.idVendedor}</TableData>
                  <TableData>{}</TableData>
                 <TableData>
                    <button className="iconSide" 
                      onClick={()=>{
                        history.push(`/actualizarVentas/${ventas._id}`)
                      }}
                    >
                      <FontAwesomeIcon icon={faPenAlt}/>
                    </button>
                    <button className="iconSide"
                      onClick={()=>handleDelete(ventas._id)}
                    >
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

export default Ventas;