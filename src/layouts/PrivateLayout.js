import React from "react";
import Aside from "components/Aside";
import Footer from "components/Footer";
import SideResponsive from "components/SideResponsive";

const PrivateLayout = ({ children }) => {
  return (
    <div className="layout">
      <Aside/>
      <SideResponsive />
      <div className="contenido "> {children}</div>
      <Footer />
    </div>
  );
};

export default PrivateLayout;
