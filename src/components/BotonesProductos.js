import React from 'react';
import {ContenedorBotonCentrado, Boton, MensajeExito} from 'elements/Formularios';

const BotonesProductos = ({nombreBoton, mensajeBoton, formularioValido}) => {
    return (
        <ContenedorBotonCentrado>
            <Boton type="submit">{nombreBoton}</Boton>
            {formularioValido && <MensajeExito>{mensajeBoton}</MensajeExito>}
        </ContenedorBotonCentrado>

    )
};

export default BotonesProductos;
