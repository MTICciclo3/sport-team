import React, { useEffect, useState } from 'react';
import Input from 'components/Input';
import {Formulario, Etiqueta, ContCarrito, Carrito, Label, LabelVenta, RadioButton, ContentRButton} from 'elements/Formularios';
import Expresiones from 'components/Expresiones';
import BotonCentrado from 'components/BotonCentrado';
import AlertaError from 'components/AlertaError';
import {Table, TableHead, TableData,} from 'elements/Listas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus, faArrowLeft, faTruckLoading, faTimes, faCheck, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory, useParams } from 'react-router-dom';
import * as api from './ApiVentas';
import * as apiProductos from 'Api';
import { GrupoInput } from 'elements/Formularios';
import Selects from 'components/Selects';

const ActualizarVentas = () => {

  const params = useParams();
  const history = useHistory();
  const initialState = {_id:'', nombre:'', apellido:'', documento:'', fecha:'', idVendedor:'', cantidadProducto:'', listaCanasta:'', producto:'', valor:''};
  const [usuarios, setUsuarios] = useState(initialState);
  const initialStateListProductos = {item:'', cantidad:''};
  const [listaCanasta, setListaCanasta] = useState([]);
  
  
      
  const [nombre, cambiarNombre] = useState({campo:'', valido: null});
  const [apellido, cambiarApellido] = useState({campo:'', valido: null});
  const [documento, cambiarDocumento] = useState({campo:'', valido: null});
  const [idVendedor, cambiarIdVendedor] = useState({campo:'', valido: null});
  const [fecha, cambiarFecha] = useState({campo:'', valido: null});
  const [cantidadProducto, cambiarCantidadProducto] = useState({campo:'', valido: null});
  const [formularioValido, cambiarFormularioValido] = useState(null);
  const [producto, setProducto] = useState({campo:'', valido: null});
  const [multi, setMulti] = useState([]);

  
  const getVenta = async(idVenta)=>{
    try{
      const res = await api.getVenta(idVenta);
      setUsuarios(res.data);
    }catch(error){
      console.log(error)
    }
  };

  useEffect(() => {
    if(params.id){
      getVenta(params.id);
      cambiarNombre({valido:'true'});
      cambiarApellido({valido:'true'});
      cambiarDocumento({valido:'true'});
      cambiarIdVendedor({valido:'true'});
      cambiarFecha({valido:'true'});
      cambiarCantidadProducto({valido:'true'});
    }
  }, []);

  const onSubmitForm = async(e) =>{
        e.preventDefault();
        if(
          nombre.valido === 'true' &&
          apellido.valido === 'true' &&
          documento.valido === 'true' &&
          idVendedor.valido === 'true' &&
          fecha.valido === 'true' &&
          cantidadProducto.valido === 'true'
        ){
          cambiarFormularioValido(true);
          console.log(usuarios);
          try{
            let res;
            if(!params.id){
              console.log(usuarios);

              res = await api.registerVenta(usuarios);
              console.log(res);
              if(res === 'OK'){

                setUsuarios(initialState);
              }
            }else{
              await api.updateVenta(params.id, usuarios);
            }
            history.push("/ventas");
          }catch(error){
            console.log(error);
          }
        }else{
          cambiarFormularioValido(false);
        }
  };

  //traer del backend de productos?

  const [productos, setProductos] = useState([]);

  const listProductos = async()=>{
    try{
      const res = await apiProductos.listProduct();
      setProductos(res.data)

    }catch(error){
      console.log(error)
    }
  };

  useEffect(()=>{
    listProductos();
  },[]);

  const productoOpciones = productos.map((producto)=>{
    return {value: producto._id, label: producto.nombre, valor:producto.valor}
  });
  
  const agregarProducto = (cantidadProducto, producto, valor)=>{
    let item = {
      'cantidad':cantidadProducto,
      'producto': producto,
      'valor': valor
    }
    setListaCanasta([...listaCanasta, item]);
  };

  const deleteItem =(i)=>{
    console.log(listaCanasta)
    var index = i;
    listaCanasta.splice(index, 1);
    console.log(i);
    setListaCanasta([...listaCanasta]);
  };

  useEffect(()=>{
    for (let i of listaCanasta){
      
      setMulti(parseInt(multi + (i.producto.valor * i.cantidad)));
      console.log(multi);
    }
  },[listaCanasta]);

  return (
      <main>
        <button className="botonVolver">
          <Link to='/ventas'>
            <FontAwesomeIcon icon={faArrowLeft}/>
          </Link>
        </button>
        <h2 className="tituloGestionVentas">Registro de venta</h2>
        <Formulario className = "guiGestionUsuarios" onSubmit = {onSubmitForm} action="">
          <Input 
            user = "Nombre"
            placeholdercont = "Nombre"
            tipo = "text"
            leyenda = "El nombre solo admite letras"
            expresionRegular = {Expresiones.nombre}
            name = "nombre"
            estado = {nombre}
            cambiarEstado = {cambiarNombre}
            DefVal = {usuarios.nombre}
            usuarios = {usuarios}
            setUsuarios = {setUsuarios}
          />
          <Input 
            user = "Apellido"
            placeholdercont = "Apellido"
            tipo = "text"
            leyenda = "El apellido solo admite letras"
            expresionRegular = {Expresiones.nombre}
            name = "apellido"
            estado = {apellido}
            cambiarEstado = {cambiarApellido}
            DefVal = {usuarios.apellido}
            usuarios = {usuarios}
            setUsuarios = {setUsuarios}
           />
          <Input 
            user = "Documento"
            placeholdercont = "Número del documento"
            tipo = "number"
            leyenda = "El Documento solo admite numeros"
            expresionRegular = {Expresiones.telefono}
            name = "documento"
            estado = {documento}
            cambiarEstado = {cambiarDocumento}
            DefVal = {usuarios.documento}
            usuarios = {usuarios}
            setUsuarios = {setUsuarios}
          />
          <Input
            estado={fecha}
            cambiarEstado={cambiarFecha}
            tipo="date"
            user="Fecha"
            name="fecha"
            leyenda= "Indique una fecha"
            expresionRegular={Expresiones.fechas}
            DefVal = {usuarios.fecha}
            usuarios = {usuarios}
            setUsuarios = {setUsuarios}
          />
          <Input 
            user = "Id-vendedor"
            placeholdercont = "Indíque su Id"
            tipo = "number"
            leyenda = "El Id solo admite numeros"
            expresionRegular = {Expresiones.telefono}
            name = "idVendedor"
            estado = {idVendedor}
            cambiarEstado = {cambiarIdVendedor}
            DefVal = {usuarios.idVendedor}
            usuarios = {usuarios}
            setUsuarios = {setUsuarios}
          />
          {params.id?(
            <LabelVenta> 
              Id-Venta: {usuarios._id} 
            </LabelVenta>
          ):(
            null
          )}  
          <Etiqueta>Información de compra: </Etiqueta>
          <Selects
            user = "Producto"
            placeholdercont = "Seleccione el producto"
            tipo = "text"
            leyenda = "Seleccione un producto"
            expresionRegular = {Expresiones.nombre}
            name = "producto"
            estado = {producto}
            cambiarEstado = {setProducto}
            opciones = {productoOpciones}
            usuarios = {usuarios}
            setUsuarios = {setUsuarios}
          />
          <ContCarrito>
            <Input 
              user = "cantidad"
              placeholdercont = "cantidad producto"
              tipo = "number"
              leyenda = "Solo ingrese numeros para asignar una cantidad al producto"
              expresionRegular = {Expresiones.cantidad}
              name = "cantidadProducto"
              estado = {cantidadProducto}
              cambiarEstado = {cambiarCantidadProducto}
              DefVal = {usuarios.cantidadProducto}
              usuarios = {usuarios}
              setUsuarios = {setUsuarios}
            />
            <Carrito type="button" onClick={()=>{agregarProducto(usuarios.cantidadProducto, usuarios.producto);}}>
              <FontAwesomeIcon icon={faCartPlus}/>
            </Carrito>
          </ContCarrito>
          <Table>
            <TableHead>
              <tr>
                <TableData>Producto</TableData>
                <TableData>Cantidad</TableData>
                <TableData>Precio unitario</TableData>
                <TableData>Eliminar</TableData>
              </tr>
            </TableHead>
            <tbody>
              {listaCanasta.map((item, i) => {
                return (
                <tr key = {i} >
                  <TableData key={i + 'td1'}>{item.producto.label}</TableData>
                  <TableData key={i + 'td2'}>{item.cantidad}</TableData>
                  <TableData key={i + 'td3'}>{item.producto.valor}</TableData>
                  <TableData>
                    <button type="button" className="iconSide" onClick={()=>deleteItem(i)}>
                      <FontAwesomeIcon icon={faTrashAlt}/>
                    </button>
                  </TableData>                     
                </tr>
                );
              })}
            </tbody>
          </Table>
          <Label>Total: {multi}</Label>
          {params.id?(
            <div>
              <Etiqueta>Estado de la venta: </Etiqueta>
              <RadioButton>
                <ContentRButton>
                  <input type="radio" value="En proceso" name="estado"/>
                  <span>
                    <FontAwesomeIcon icon={faTruckLoading}/>
                  </span>
                  <span> En proceso </span>
                </ContentRButton>
                <ContentRButton>
                  <input type="radio" value="Cancelado" name="estado"/>
                  <span>
                    <FontAwesomeIcon icon={faTimes}/>
                  </span>
                  <span> Cancelado </span>
                </ContentRButton>
                <ContentRButton>
                  <input type="radio" value="Entregado" name="estado"/>
                  <span>
                    <FontAwesomeIcon icon={faCheck}/>
                  </span>
                  <span> Entregado </span>
                </ContentRButton>
              </RadioButton>
            </div>
          ):(
            null
          )}  
          
          
          {formularioValido === false  && <AlertaError/>}
          {params.id?(
            <BotonCentrado 
              nombreBoton = "Actualizar"
              mensajeBoton = "Venta actualizada exitosamente"
              formularioValido = {formularioValido}
            />
          ):(
            <BotonCentrado 
              nombreBoton = "Crear"
              mensajeBoton = "Venta creada exitosamente"
              formularioValido = {formularioValido}
            />
          )}  
      </Formulario>
            
    </main>
  )
};

export default ActualizarVentas;
