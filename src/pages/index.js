import React from "react";
import Logo from "assets/Logo.png";
import "../index.css"

const index = () => {
  return (
    <div display="flex" justify-content="center" height="100%">
      <h1 className='tituloUno' >SPORTTEAM</h1>
      <h1 className='tituloUno' >Los Zapatos del Futuro</h1>
      <img width='100%' height='100%' src={Logo} alt="" />
    </div>
  );
};

export default index;
