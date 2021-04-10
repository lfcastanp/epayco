import React, {useState, useContext} from 'react'
import "./form.css";
import { Field, Form } from "react-final-form";
import { SecurityContext } from "../../contexts/security/SecurityContext"
import Modal from "./modal"
import Footer from "../footer/footer"
const initialState = {
  formulario: {
    nombre: "",
    apellido: "",
    pais: "",
    documento: "",
  },
  modal: false
};

const Formulario = () => {
  let [state, setState] = useState(initialState)
  let [{ country }, { }] = useContext(SecurityContext);
  let functionSubmit = (formObj) => {
    if(formObj){
      setState({...state, modal: true})
    }
  };
  
  const required = value => {
    return value ? undefined : "Requerido";
  };

  let setField = (field) => (e) => {
    setState({
      ...state,
      formulario: { ...state.formulario, [field]: e.target.value },
    });
  };

  return (
      <div className="container-form">
        {state.modal === true && (
          <div className="back-document">
            <div className="w-100 container-modal-2" style={{ width: '40%', height: '100%' }}>
              <Modal 
                state={state}
                setState={setState}
              />
            </div>
          </div>
        )}
        <h6>Información del formulario</h6>
        <hr className="dropdown-divider"/>
        <p className="description-form">Ingrese el titulo y la descripción que visualizarán los usuarios durante el proceso de pago</p>
        <Form
          onSubmit={formObj => {
            functionSubmit(formObj);
          }}
          initialValues={state.formulario}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="formulario-prueba">
              <div className="form-group w-30">
                <Field name="nombre" validate={required}>
                  {({ input, meta }) => (
                    <>
                      <label className="tipo-title">Nombre<strong className="advertencia">*</strong></label>
                      <input
                        {...input}
                        type="text"
                        className="form-control"
                        placeholder="Ingrese nombre"
                      />
                      {meta.touched && meta.error && (
                        <span className="advertencia">{meta.error}</span>
                      )}
                    </>
                  )}
                </Field>
              </div>
              <div className="form-group w-30">
                <Field name="apellido" validate={required}>
                  {({ input, meta }) => (
                    <>
                      <label className="tipo-title">Apellido<strong className="advertencia">*</strong></label>
                      <input
                        {...input}
                        type="text"
                        className="form-control"
                        placeholder="Ingrese apellido"
                      />
                      {meta.touched && meta.error && (
                        <span className="advertencia">{meta.error}</span>
                      )}
                    </>
                  )}
                </Field>
              </div>
              <div className="form-group w-30">
                <Field name="pais" validate={required}>
                  {({ input, meta }) => (
                    <>
                      <label className="tipo-title">Seleccione un pais<strong className="advertencia">*</strong></label>
                      <select 
                        {...input}
                        className="form-control" 
                        name="" 
                        id="">
                        <option value="">Seleccione un pais</option>
                        {country.map((co) => (
                          <option key={co.name} value={co.name}>
                            {co.name}
                          </option>
                        ))}
                      </select>
                      {meta.touched && meta.error && (
                        <span className="advertencia">{meta.error}</span>
                      )}
                    </>
                  )}
                </Field>
              </div>
              <div className="form-group w-30">
                <Field name="documento" validate={required}>
                  {({ input, meta }) => (
                    <>
                      <label className="tipo-title">Numero de documento<strong className="advertencia">*</strong></label>
                      <input
                        {...input}
                        type="text"
                        className="form-control"
                        placeholder="Ingrese documento"
                      />
                      {meta.touched && meta.error && (
                        <span className="advertencia">{meta.error}</span>
                      )}
                    </>
                  )}
                </Field>
              </div>
              
              <div className="botones">
              <input
                type="submit"
                value="Enviar"
                className="btn btn-primary btn-form"
              />
              <button type="reset" className="btn btn-outline-primary btn-form">Cancelar</button>
              </div>
            </form>
          )}
        </Form>
        
        <Footer />
        
      </div>
  )
}

export default Formulario