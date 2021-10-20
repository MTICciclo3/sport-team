import React from 'react'
import {Bar,Boton} from 'elements/Layouts'
import { Link } from 'react-router-dom'
import Googlein from './Googlein'

const Navbar = () => {
    return (
        <div>
            <Bar>         
                <Boton><Link to='/Dashboard'>GESTION</Link></Boton>
                <Googlein/>           
            </Bar>
            
        </div>
    )
};

export default Navbar;
