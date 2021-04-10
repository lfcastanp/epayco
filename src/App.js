import React from "react";
import "./App.css";
import Home from "./components/home/home";
import AppRouter from "./utils/router";

import {
  SecurityContextProvider,
  SecurityContext,
  STATUS_LOADING,
  STATUS_NOT_LOADED,
} from "./contexts/security/SecurityContext";

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { AlertContextProvider } from "./contexts/alerts/AlertContext";

const AppRender = ({ match }) => {
  let [security] = React.useContext(SecurityContext);

  return (
    <Switch>
      <Route path="/prueba/app/home/" component={Home} />
      <Route path="/prueba/app" component={AppRouter} />
      <Redirect to="/prueba/app/home" />
    </Switch>
  );
};

const App = () => (
  <Router>
    <AlertContextProvider>
      <SecurityContextProvider>
        <AppRender />
      </SecurityContextProvider>
    </AlertContextProvider>
  </Router>
);

export default App;
