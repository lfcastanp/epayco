import React from "react";
import imgSuccess from "../img/success.png"
const Modal = ({ state, setState, obj }) => {
  
  return (
    <div className="container-modal">
      <div className="container-buttons-modal flex flex-column align-items-center">
        <img
          src={imgSuccess}
          className="imgSuccess"
          width="80px"
        />
        <h3>Formulario enviado con exito</h3>
        <div
          className="btn btn-primary"
          onClick={() => {
            console.log("cerrar modal");
            setState({ ...state, modal: false });
          }}
        >
          Cerrar
        </div>
      </div>
    </div>
  );
};

export default Modal;
