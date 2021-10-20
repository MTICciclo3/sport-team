import React from 'react';
import {MensajeError} from 'elements/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'; 

const AlertaError = () => {
    return (
            <MensajeError>
                <p>
                    <FontAwesomeIcon icon={faExclamationTriangle}/>
                    <b>Error:</b> Por favor rellene el formulario correctamente.
                </p>
            </MensajeError>
    )
}

export default AlertaError
