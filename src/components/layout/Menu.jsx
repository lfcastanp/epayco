import React, { useContext, useState } from "react";
import "../layout/Menu.css";
import Profile from "../layout/Profile";
import ListDropDown from "../layout/ListDropDown";

const Menu = () => {

  return (
    <>
      <div className="flex container-menu">
        <div className="menu-app">
          <Profile />
          <ListDropDown />
        </div>
      </div>
    </>
  );
};

export default Menu;
