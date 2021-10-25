import React from 'react'
import { Bar, Boton } from 'elements/Layouts'
import { Link } from 'react-router-dom'

import { useState } from 'react';
import GoogleLogin from 'react-google-login';


const Navbar = () => {
    const initalLoggedIn = false
    const [logged, setLogged] = useState(initalLoggedIn);

    const Login = (response) => {
        setLogged(true);
        localStorage.setItem("token", response.tokenId);
        console.log(response);
        console.log()
    };

    const logout = () => {
        setLogged(false);
        localStorage.removeItem("token")
    };

    const loginE = (err) => {
        console.log(err);
    };

    if (logged) {
        return (
            <div>
                <Bar>
                    <Boton><Link to='/Dashboard'>GESTION</Link></Boton>
                    <Boton onClick={logout}>
                        logout
                    </Boton>
                </Bar>

            </div>
        )
    } else {
        return (
            <div>
                <Bar className="justify-content-end">
                    <div>
                        <GoogleLogin
                            clientId="589673020443-1qefkvd63rah6bnrkp1ci9qkuisbdhbd.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={Login}
                            onFailure={loginE}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
                </Bar>
            </div >
        )
    }
};

export default Navbar;
