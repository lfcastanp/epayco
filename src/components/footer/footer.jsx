import React from "react";
import imgEpayco from "../img/epayco.png"
import imgDavivienda from "../img/davivienda.png"
import "./footer.css"

const Footer = () => {
  
  return (
    <div className="footer">
      <div>
        ePayco © 2011 - 2019 todos los derechos reservados.
      </div>
      <div>
        <img
          src={imgDavivienda}
          className="imgSuccess"
          width="130px"
        />
        <img
          src={imgEpayco}
          className="imgSuccess"
          width="100px"
        />
      </div>
    </div>
  );
};

export default Footer;
