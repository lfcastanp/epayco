import React, { useContext, useState } from "react";
import "./generalLayout.css";

const GeneralLayout = ({ children }) => {
  

  return (
    <div
      className="flex flex-wrap"
      style={{ height: "100vh", overflowY: "hidden" }}
    >
      <div className="flex-1 flex ">
        <div id="content-wrapper" className="flex-1 flex scroll-view">
          {children}
        </div>
      </div>
    </div>
  );
};

export default GeneralLayout;
