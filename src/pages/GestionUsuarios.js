import React, { useState, useEffect } from 'react'
import { Formulario } from 'elements/Formularios';
import Input from 'components/Input';
import Expresiones from 'components/Expresiones';
import BotonCentrado from 'components/BotonCentrado';
import AlertaError from 'components/AlertaError'
import Selects from 'components/Selects';
import { Link, useHistory, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from "@material-ui/core";
import * as server from './server';


function GestionUsuarios() {

    const params = useParams();
    const history = useHistory();

    const initialState = { _id: '', nombre: '', apellido: '', documento: '', Estado: '', Rol: '' }
    const [usuarios, setUsuarios] = useState(initialState);

    const [nombre, cambiarNombre] = useState({ campo: '', valido: '' });
    const [apellido, cambiarApellido] = useState({ campo: '', valido: '' });
    const [documento, cambiarDocumento] = useState({ campo: '', valido: '' });
    const [Rol, cambiarRol] = useState({ campo: '', valido: '' });
    const [Estado, cambiarEstado] = useState({ campo: '', valido: '' });
    const [formularioValido, cambiarFormularioValido] = useState('');


    const getUsuario = async (usuarioId) => {
        try {
            const res = await server.getUsuario(usuarioId);
            setUsuarios(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (params.id) {
            getUsuario(params.id);
            cambiarNombre({ valido: "true" });
            cambiarApellido({ valido: "true" });
            cambiarDocumento({ valido: "true" });
            cambiarRol({ valido: "true" });
            cambiarEstado({ valido: "true" });
        }
        // eslint-disable-next-line
    }, []);

    const onSubmitForm = async (e) => {
        e.preventDefault();
        if (
            nombre.valido === 'true' &&
            apellido.valido === 'true' &&
            documento.valido === 'true' &&
            Rol.valido === 'true' &&
            Estado.valido === 'true'
        ) {
            cambiarFormularioValido(true);
            try {
                let res;
                if (!params.id) {
                    res = await server.registerUser(usuarios);
                    console.log(res)
                    if (res === 'OK') {
                        setUsuarios(initialState);
                    }
                } else {
                    await server.updateUser(params.id, usuarios);
                }
                history.push("/TablaGestionUsuarios");
            } catch (error) {
                console.log(error)
            }
        } else {
            cambiarFormularioValido(false);
        }
    };
    // Rol
    const opcion1 = [
        { value: '0', label: 'Administrador' },
        { value: '1', label: 'Vendedor' },
        { value: '2', label: 'Pendiente' }
    ];
    // estado
    const opcion2 = [
        { value: '0', label: 'Pendiente' },
        { value: '1', label: 'Autorizado' },
        { value: '2', label: 'No Autorizado' }
    ];

    return (
        <main className="guiGestionUsuarios">
            <h2 className="tituloGestionVentas">Gestion Vendedores</h2>
            <Tooltip title="Regresar" arrow >
                <Link to='/TablaGestionUsuarios'>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
            </Tooltip>
            <Formulario action="" onSubmit={onSubmitForm}>
                <Input
                    estado={nombre}
                    cambiarEstado={cambiarNombre}
                    DefVal={usuarios.nombre}
                    tipo="text"
                    user="Nombre"
                    placeholdercont="Nombre de usuario"
                    name="nombre"
                    leyenda="El nombre solo admite letras"
                    expresionRegular={Expresiones.nombre}
                    usuarios={usuarios}
                    setUsuarios={setUsuarios}
                />
                <Input
                    estado={apellido}
                    cambiarEstado={cambiarApellido}
                    DefVal={usuarios.apellido}
                    tipo="text"
                    user="Apellido"
                    placeholdercont="Apellido de usuario"
                    name="apellido"
                    leyenda="El apellido solo admite letras"
                    expresionRegular={Expresiones.nombre}
                    usuarios={usuarios}
                    setUsuarios={setUsuarios}
                />
                <Input
                    estado={documento}
                    cambiarEstado={cambiarDocumento}
                    DefVal={usuarios.documento}
                    tipo="number"
                    user="Id Usuario"
                    placeholdercont="N° ID del usuario"
                    name="documento"
                    leyenda="El Documento solo admite numeros, minimo 7 - maximo 14"
                    expresionRegular={Expresiones.telefono}
                    usuarios={usuarios}
                    setUsuarios={setUsuarios}
                />
                <Selects
                    estado={Rol}
                    cambiarEstado={cambiarRol}
                    DefVal={opcion1[usuarios.Rol]}
                    tipo="text"
                    user="Rol"
                    name="Rol"
                    leyenda="Administrador/ Vendedor / No Asignado"
                    expresionRegular={Expresiones.nombre}
                    opciones={opcion1}
                    usuarios={usuarios}
                    setUsuarios={setUsuarios}
                />
                <Selects
                    estado={Estado}
                    cambiarEstado={cambiarEstado}
                    DefVal={opcion2[usuarios.Estado]}
                    tipo="text"
                    user="Estado"
                    name="Estado"
                    leyenda="Pendiente / Autorizado / No Autorizado"
                    expresionRegular={Expresiones.nombre}
                    opciones={opcion2}
                    usuarios={usuarios}
                    setUsuarios={setUsuarios}
                />

                {formularioValido === false && <AlertaError />}
                {params.id ? (
                    <BotonCentrado
                        nombreBoton="Actualizar"
                        formularioValido={formularioValido}
                        mensajeBoton="Actualización exitosa"
                    />
                ) : (
                    <BotonCentrado
                        nombreBoton="Crear"
                        formularioValido={formularioValido}
                        mensajeBoton="Creación exitosa"
                    />
                )}

            </Formulario>
        </main>
    );
};


export default GestionUsuarios;
