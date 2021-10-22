import React from 'react'
import GoogleLogin from 'react-google-login';


const Googlein = () => {
    const responseGoogle = (response) => {
        console.log(response);
    }
    return (
        <div>
            <GoogleLogin
                clientId="589673020443-1qefkvd63rah6bnrkp1ci9qkuisbdhbd.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}
export default Googlein
