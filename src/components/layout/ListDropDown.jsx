import React from "react";
import "./ListDropDown.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers
} from "@fortawesome/free-solid-svg-icons";

const ListDropDown = () => {

  return (
    <div className="menu-list">
      
        <ul className="list-ul-menu">
          <li className="li-dropdown">
            <Link to="">
              <div className="content-li">
                &nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon className="" icon={faHome} />
                &nbsp;&nbsp;&nbsp;Dashboard
              </div>
            </Link>
          </li>
          <div className="div-divider"></div>
          <li className="li-dropdown">
            <Link to="">
              <div className="content-li">
                &nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon className="" icon={faUsers} />
                &nbsp;&nbsp;&nbsp;Clientes
              </div>
            </Link>
          </li>
        </ul>
    </div>
  );
};

export default ListDropDown;
