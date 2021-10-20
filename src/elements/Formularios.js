import styled, { css } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const colores ={
    borde : "#0075FF",
    error : "#bb2929",
    exito : "#1ed12d"
}

const Formulario = styled.form`
    display : grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media(max-width: 800px){
        grid-template-columns: 1fr;
    }
`;

const Label = styled.div`
    display: block;
    font-weight: 700;
    padding: 10px;
    min-height: 40px;
    ${props => props.valido === 'false' && css`
        color: ${colores.error};
    `}
`;

const GrupoInput = styled.div`
    position: relative;
    z-index: 90;
`;

const Inputs = styled.input`
    width: 100%;
    background-color: #fff;
    border-radius: 3px;
    height: 45px;
    line-height: 45px;
    padding: 0px 40px 0px 10px;
    transition: .3s ease all;
    border: 3px solid transparent;

    &:focus {
        border: 3px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
    }

    ${props => props.valido === 'true' && css`
        border: 3px solid transparent;
    `}
    ${props => props.valido === 'false' && css`
        border: 3px solid ${colores.error} !important;
    `}

`;

const LeyendaError = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colores.error};
    display:none;
    ${props => props.valido === 'true' && css`
        display:none`};
    ${props => props.valido === 'false' && css`
        display:block`};
`;

const IconoValidacion= styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
    bottom: 14px;
    z-index: 100px;
    font-size:16px;
    opacity: 0;
    ${props => props.valido === 'false' && css`
        opacity:1;
        color: ${colores.error}
        `}
    ${props => props.valido === 'true' && css`
        opacity:1;
        color: ${colores.exito}
        `}
`;

const ContenedorTerminos = styled.div`
    grid-column: span 2;
    input{
        margin-right: 10px;
    }
    @media(max-width: 800px){
        grid-column: span 1;
    }
`;

const ContenedorBotonCentrado = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: span 2;
    @media(max-width: 800px){
        grid-column: span 1;
    }
`;

const Boton = styled.button`
    height: 45px;
    line-height: 45px;
    width: min-content;
    padding: 0 .5rem;
    background: #023047;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    transition: .1s ease all;
    cursor: pointer;
    &:hover {
        box-shadow: 3px 0px 30px rgba(163,163,163, 1)
    }
`;

const MensajeExito = styled.p `
    font-size: 14px;
    color: ${colores.exito};

`;

const MensajeError = styled.div `
    font-size: 15px;
    line-height: 15px;
    background: #F66060;
    padding: 0px 15px;
    border-radius: 3px;
    grid-column: span 2;
    p{
        margin: 10px;
    }
    b{
        margin-left: 10px;
    }
    @media(max-width: 800px){
        grid-column: span 1;
    }
`;
const Etiqueta = styled.h3 `
    font-size: 15px;
    line-height: 15px;
    padding: 0px 15px;
    border-radius: 3px;
    grid-column: span 2;
    text-align: center;
    @media(max-width: 800px){
        grid-column: span 1;
    }
`;
const ContCarrito = styled.div `
    display: flex;
`;
const Carrito = styled.button`
    height: 30px;
    margin: 50px 0px 0px 30px  ;
`;

const LabelVenta = styled.label`
    font-size: 20px;    
    margin: 50px 0px 0px 25px;    
`;
const RadioButton = styled.div`
    font-size: 15px;
    display: flex;
    width: 100%;
    line-height: 15px;
    padding: 0px 15px;
    border-radius: 3px;
    grid-column: span 2;
    justify-content: space-between;
    @media(max-width: 800px){
        grid-column: span 1;
    }
`;
const ContentRButton = styled.div`
    margin-right: 20px;  
    span {
        margin-left: 10px;
    }
`;


export {Formulario,
    Label,
    GrupoInput,
    Inputs,
    LeyendaError,
    IconoValidacion,
    ContenedorTerminos,
    ContenedorBotonCentrado,
    Boton,
    MensajeExito,
    MensajeError,
    Etiqueta,
    ContCarrito,
    Carrito,
    LabelVenta,
    RadioButton,
    ContentRButton
};