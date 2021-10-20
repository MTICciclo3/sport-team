import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import React from 'react'

const PublicLayout = ({ children }) => {
    return (
        <div>
            <NavBar/>
            <main>{ children }</main>
            <Footer/>
        </div>
    )
};

export default PublicLayout;
