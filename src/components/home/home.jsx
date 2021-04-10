import React, { useContext } from "react";
import "./home.css";
import Menu from "../layout/Menu"
import Form from "../form/form"
import { SecurityContext } from "../../contexts/security/SecurityContext";

const Home = ({}) => {
  const [{ country }, { }] = useContext(SecurityContext);
 
  
  return (
    <div
      className="flex flex-wrap"
      style={{ height: "100vh", overflowY: "hidden" }}
    >
      <div className="container-1">
        <Menu />
        <Form />
      </div>
    </div>
  );
};

export default Home;
