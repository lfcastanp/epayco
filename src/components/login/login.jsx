import React, { useState, useContext } from "react";
import { SecurityContext } from "../../contexts/security/SecurityContext"
import "./login.css";

const initialState = {
  loged: {
    user: "",
    password: "",
  },
  show_pass: false,
};

const Login = ({ match }) => {
  let [state, setState] = useState(initialState);
  let { params, url, path } = match;
  let [securityState, securityActions] = useContext(SecurityContext);

  let setField = (field) => (e) => {
    setState({ ...state, loged: { ...state.loged, [field]: e.target.value } });
  };

  const userLogin = (e) => {
    e.preventDefault();
    securityActions.login(state.loged);
  };

  function onChange(value) {
    setState({ ...state, captcha: value });
  }

  return (
    <div className="App">
      <div className="login flex flex-column width-100">
        <div className="label-login">
          <small>¡Buenas tardes!</small>
          <p className="label-login-satpush">Inicia Sesión</p>
          <br />
        </div>
        <div className="form-login margin-top-form-login">
          <form onSubmit={userLogin}>
            <div className="form-group">
              <label className="label-box">
                Usuario
              </label>
              <input
                required
                value={state.loged.user}
                onChange={setField("user")}
                className="email-login form-control"
                type="text"
                placeholder="Usuario"
              />
            </div>
            <div className="form-group">
              <label className="label-box">
                Contraseña
              </label>
              <div className="flex">
                <input
                  required
                  value={state.loged.password}
                  onChange={setField("password")}
                  className="password-login form-control"
                  type={state.show_pass ? "text" : "password"}
                  placeholder="Contraseña"
                />
                <div
                  className="show-pass cursor-action txt-center"
                  onClick={() => {
                    setState({ ...state, show_pass: !state.show_pass });
                  }}
                >
                </div>
              </div>
            </div>
            
              <div className="form-group flex justify-center">
                <input
                  className="btn btn-success"
                  value="Iniciar Sesión"
                  type="submit"
                />
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
