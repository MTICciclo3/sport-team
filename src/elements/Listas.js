import styled from "styled-components";

const Table = styled.table`
width: 100%;
margin: 50px;
overflow-y: scroll;
@media (max-width: 800px){
    width: 50%
}
`;

const TableHead = styled.thead`
background-color: #023047;
color: white;
padding-top: 12px;
padding-bottom: 12px;
text-align: left;

`;
const TableRow = styled.tr`
&:nth-child(even){
    background-color: #d3d3d3c2;
}
&:hover { 
    background-color: #ddd;
  cursor: pointer;
}
`;
const TableData = styled.td`
padding: 8px;
border: 1px solid #ddd;

`;

const ContenedorBotonCentrado = styled.div`
    display: block;
    text-align: right;

`;

const Boton = styled.button`
    height: 45px;
    line-height: 45px;
    width: 15%;
    margin:20px;
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
    @media(max-width: 800px){
        font-size: 0.8rem;
        width: 30%
    }
`;

export{
    Table,
    TableHead,
    TableData,
    TableRow,
    ContenedorBotonCentrado,
    Boton,
}

