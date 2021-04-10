import React from "react";
import GeneralLayout from "../components/general/generalLayout";
import { Switch, Route, Router } from "react-router-dom";
import Home from "../components/home/home";
/* PROVIDERS */
//import { AdminIndexContextProvider } from "../../contexts/security/AdminIndexContext";

const App = ({ match }) => {
  return (
    <GeneralLayout>
      <Switch>
        <Route exact path={`${match.path}/home/:codCuenta/:sesionId/:telefono`} render={() => <Home />} />
        <Route path={`${match.path}/other`} render={() => <div>Other</div>} />

      </Switch>
    </GeneralLayout>
  );
};

export default App;
