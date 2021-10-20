import React from 'react'
import {Label, GrupoInput, LeyendaError, IconoValidacion,} from 'elements/Formularios';
import { faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import Select from 'react-select';

const Selects = ({user, tipo, leyenda, expresionRegular, name, estado, cambiarEstado, opciones, DefVal , setUsuarios, usuarios}) => {

    var valor = ""
    if(name==='Rol'){
        valor = 'Rol';
    }else if(name === 'Estado'){
        valor = 'Estado'
    }else{
        valor = 'producto'
    }

    const onChange = (e)=>{
        cambiarEstado({campo: e});
        setUsuarios({...usuarios,  [valor]: e});
    }
    const validacion = (e) =>{
        if(expresionRegular){
            console.log(estado.campo.value);

            console.log(`usuarios.${valor}`)
            if(estado.campo.value!== undefined){
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
                <Select
                    type={tipo}
                    id={name}
                    value={DefVal}
                    onChange={onChange}
                    onKeyUp={validacion}
                    onBlur={validacion}
                    valido={estado.valido}
                    options={opciones}
                    className="selectlist"
                />
                <IconoValidacion
                icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle}
                valido={estado.valido}/>
            </GrupoInput>
            <LeyendaError valido={estado.valido}>{leyenda}</LeyendaError>
        </div>
    )
};

export default Selects;
