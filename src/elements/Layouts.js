import styled, { css } from "styled-components";

const Bar = styled.nav`
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 20px;
 background-color: #0e7a96;
 color: #fff;
`;

const Foot = styled.footer`
position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #023047;
  color: white;
  text-align: center;
`;

const Boton = styled.button`
    height: 45px;
    line-height: 45px;
    width: 150px;
    background: #dae2e4;    
    font-weight: light;
    color:023047;
    border: none;
    border-radius: 3px;
    transition: .1s ease all;
    cursor: pointer;
    &:hover {
        box-shadow: 3px 0px 30px #fb8500
    }
`;

export {Bar,Foot,Boton};