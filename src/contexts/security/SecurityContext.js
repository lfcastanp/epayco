import React, { useEffect, useState, useContext } from "react";
import axiosAuth from "../axios/axios-client";
import CryptoJs from "crypto-js";
import { useLocation, useHistory } from "react-router-dom";
import { AlertContext } from "../alerts/AlertContext";

export const STATUS_LOADING = "LOADING";
export const STATUS_NOT_LOADED = "NOT_LOADED";
export const STATUS_NOT_LOGGED_IN = "NOT_LOGGED_IN";
export const STATUS_LOGGED_IN = "LOGGED_IN";
export const STATUS_LOADED = "STATUS_LOADED";

let initalState = {
  status: STATUS_NOT_LOADED,
  country: [],
  errors: {
    error: [],
    status: false,
  },
  formErrors: {},
};

export const SecurityContext = React.createContext([]);

export const SecurityContextProvider = ({ children }) => {
  let location = useLocation();
  let history = useHistory();
  const [
    { },
    { alertSuccess, alertWarning, alertError, showErrors },
  ] = useContext(AlertContext);
  let [state, setState] = useState(initalState);
  let [errors, setErrors] = useState(initalState.errors);
  
  //manejo de errores
  useEffect(() => {
    if (errors.status) {
      showErrors(errors.error);
      setErrors({ ...errors, status: false });
    }
  }, [errors]);

  useEffect(() => {
    if (state.status === STATUS_NOT_LOADED) {
      setState({ ...state, state: { status: STATUS_LOADING } });
      axiosAuth()
        .get("")
        .then(({ data }) => {
          if (data) {
            
            setState({...state, status: STATUS_LOADED, country: data.slice(0, 20)});
          }
        })
        .catch((e) => {
          alertError("Error al buscar los paises");
        });
    }
  }, [state.status]);

  return (
    <SecurityContext.Provider
      value={[
        state,
        {
          setState,
        },
      ]}
    >
      {children}
    </SecurityContext.Provider>
  );
};
