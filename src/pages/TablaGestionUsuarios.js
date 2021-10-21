import React, {useState, useEffect} from 'react'
import {Table, TableHead, TableData, Boton, ContenedorBotonCentrado, TableRow} from 'elements/Listas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenAlt, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import * as server from './server';

const TablaGestionUsuarios = () => {

    const [usuarios, setUsuarios]= useState([]);

    
    const listUsuarios = async()=>{
      try{
        const res = await server.listUsuarios();
        setUsuarios(res.data)
      }catch(error){
        console.log(error)
      }
    };

    useEffect(()=>{
      listUsuarios();
    },[]);

    const history = useHistory();

    const handleDelete= async (usuarioId)=>{
      await server.deleteUser(usuarioId);
      listUsuarios();
    };

    const [busqueda, setBusqueda] = useState('');
    const [usuariosFiltrados, setUsuariosFiltrados] = useState(usuarios);

    useEffect(() => {
      setUsuariosFiltrados(
      usuarios.filter((elemento) => {
        return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
      }));
    }, [busqueda, usuarios]);

  return(
      <main className="mainContainerTable">
      <ContenedorBotonCentrado>
      <Boton>
        <Link to="/gestionUsuarios">Agregar</Link>
      </Boton>
      </ContenedorBotonCentrado>
      <h2 className="tituloGestionUsuarios">Gestion de Vendedores</h2>
      <input className = "inputBusqueda"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder='Buscar'
      />
      <Table>
        <TableHead>
          <tr>
            <TableData>Nombre</TableData>
            <TableData>Documento</TableData>
            <TableData>Estado</TableData>
            <TableData>Editar</TableData>
          </tr>
        </TableHead>
        <tbody>
          {usuariosFiltrados.map((usuario) => (
            <TableRow key={usuario._id}>
              <TableData>{usuario.nombre}</TableData>
              <TableData>{usuario.apellido}</TableData>
              <TableData>{usuario.documento}</TableData>
              <TableData>
                <button className="iconSide" onClick={() => {
                  history.push(`/editarUsuario/${usuario._id}`)}}
                >
                    <FontAwesomeIcon  icon={faPenAlt}/>
                </button>
                <button className="iconSide" onClick={()=>handleDelete(usuario._id)}
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

export default TablaGestionUsuarios;

