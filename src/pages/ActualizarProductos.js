import React, {useState, useEffect} from 'react';
import Input from 'components/Input';
import {Formulario} from 'elements/Formularios';
import Expresiones from 'components/Expresiones';
import BotonCentrado from 'components/BotonCentrado';
import AlertaError from 'components/AlertaError'
import Selects from 'components/Selects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { Link,useHistory,useParams } from 'react-router-dom';
import * as api from 'Api'


const ActualizarProductos = () => {

    const params=useParams();
    const history=useHistory();

    const initialState={_id:'', nombre:'', descripcion:'', valor:'', Estado:'' };
    const [usuarios,setUsuarios]= useState(initialState);


    const [nombre, cambiarNombre] = useState({campo:'',valido: ''});
    const [descripcion, cambiarDescripcion] = useState({campo:'',valido: ''});
    const [valor, cambiarvalor] = useState({campo:'',valido: ''});
    const [idVendedor, cambiarIdVendedor] = useState({valido: ''});
    const [Estado, cambiarEstado] = useState({campo:'',valido: ''});
    const [formularioValido, cambiarFormularioValido] = useState('');

    const getProducto= async(productId)=>{
        try{
            const res = await api.getProduct(productId);
            setUsuarios(res.data);
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        if(params.id){
            getProducto(params.id);
            cambiarNombre({valido: "true"});
            cambiarDescripcion({valido: "true"});
            cambiarvalor({valido: "true"});
            cambiarEstado({valido: "true"});
        }
        // eslint-disable-next-line
    }, []);


    const onSubmitForm = async(e) =>{
        e.preventDefault();
        if (
            nombre.valido === 'true' &&
            descripcion.valido === 'true' &&
            valor.valido === 'true' &&
            Estado.valido === 'true'
            ){
                cambiarFormularioValido(true);
                try{
                    let res;
                    if(!params.id){
                        res= await api.registerProducts(usuarios);
                        console.log(res)
                        if (res === 'OK'){
                            setUsuarios(initialState);
                            }
                    }else{
                        await api.updateProduct(params.id, usuarios);
                    }
                        history.push("/ListadoProductos");
                    }catch(error){
                    console.log(error)
                }
            }else{
                cambiarFormularioValido(false);
            }
        }

    const productoDisponible = [
        {value:'0', label: 'Disponible'},
        {value:'1', label: 'No disponible'},
        ];

    return (
        <main>
        <button className="botonVolver">
                <Link to='/listadoProductos'>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </Link>
            </button>
            <h2 className="tituloGestionVentas">Registro de productos</h2>
            <Formulario className = "guiGestionUsuarios" onSubmit = {onSubmitForm} action="">
                <Input
                    user = "Nombre"
                    placeholdercont = "Nombre producto"
                    tipo = "text"
                    leyenda = "El nombre solo admite letras"
                    expresionRegular = {Expresiones.nombre}
                    DefVal={usuarios.nombre}
                    usuarios={usuarios}
                    setUsuarios={setUsuarios}
                    name = "nombre"
                    estado = {nombre}
                    cambiarEstado = {cambiarNombre}
                    />
                    <Input
                    user = "Descripcion"
                    placeholdercont = "Descripción producto"
                    tipo = "text"
                    leyenda = "El descripción solo admite letras"
                    expresionRegular = {Expresiones.nombre}
                    name = "descripcion"
                    estado = {descripcion}
                    cambiarEstado = {cambiarDescripcion}
                    DefVal={usuarios.descripcion}
                    usuarios={usuarios}
                    setUsuarios={setUsuarios}
                    />
                    <Input
                    user = "Valor"
                    placeholdercont = "valor producto"
                    tipo = "number"
                    leyenda = "El valor solo admite números"
                    expresionRegular = {Expresiones.valores}
                    name = "valor"
                    estado = {valor}
                    cambiarEstado = {cambiarvalor}
                    DefVal={usuarios.valor}
                    usuarios={usuarios}
                    setUsuarios={setUsuarios}
                    />
                    <Input 
                    user = "URL"
                    placeholdercont = "URL-producto"
                    tipo = "text"
                    leyenda = "No es una URL valida"
                    expresionRegular = {Expresiones.nombre}
                    name = "idVendedor"
                    estado = {idVendedor}
                    cambiarEstado = {cambiarIdVendedor}
                    />
                    
                    <Selects
                    user = "Estado"
                    placeholdercont = "Selecciona el estado"
                    tipo = "text"
                    leyenda = "Solo ingrese disponible o no disponible"
                    expresionRegular = {Expresiones.nombre}
                    name = "Estado"
                    estado = {Estado}
                    cambiarEstado = {cambiarEstado}
                    opciones={productoDisponible}
                    DefVal={productoDisponible[usuarios.Estado]}
                    usuarios={usuarios}
                    setUsuarios={setUsuarios}
                    />

                    {formularioValido === false  && <AlertaError/>}
                    { params.id?(
                        <BotonCentrado
                            nombreBoton = "Actualizar"
                            mensajeBoton = "Actualización exitos"
                            formularioValido = {formularioValido}
                    />
                    ):(
                        <BotonCentrado
                            nombreBoton = "Crear"
                            formularioValido = {formularioValido}
                            mensajeBoton = "Creación exitosa"
                    />
                    ) }
                </Formulario>
        </main>
    )
};

export default ActualizarProductos;