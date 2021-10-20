import React from 'react'
import {Label, GrupoInput, Inputs, LeyendaError, IconoValidacion,} from 'elements/Formularios';
import { faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons'

const Input = ({user, placeholdercont, tipo, leyenda, expresionRegular, name, estado, cambiarEstado, DefVal, setUsuarios, usuarios}) => {

    const onChange = (e) =>{
        cambiarEstado({...estado, campo: e.target.value});
        console.log(e.target.value)
        setUsuarios({...usuarios, [e.target.id]: e.target.value});
    }
    const validacion = () =>{
        if(expresionRegular){
            console.log(estado.campo)
            if(expresionRegular.test(estado.campo)){
                cambiarEstado({...estado, valido: "true"});
            } else{
                cambiarEstado({...estado, valido: "false"});
            }
        }
    }
    return (
        <div>
            <Label htmlFor={name} valido={estado.valido}>{user}</Label>
            <GrupoInput>
                <Inputs
                    type={tipo}
                    placeholder={placeholdercont}
                    id={name}
                    defaultValue={DefVal}
                    onChange={onChange}
                    onKeyUp={validacion}
                    onBlur={validacion}
                    valido={estado.valido}
                />
                <IconoValidacion
                icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle}
                valido={estado.valido}/>
            </GrupoInput>
            <LeyendaError valido={estado.valido}>{leyenda}</LeyendaError>
        </div>
    )
};

export default Input;
