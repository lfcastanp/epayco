import React from "react";
import "../layout/Profile.css";
import Logo from "../img/logo.png"
const Profile = () => {

  return (
    <div className="profile-menu">
      <div>
        <img
          src={Logo}
          className="imgLogo"
          width="100px"
        />
      </div>
      <div className="person-profile-info flex w-100">
        ALEXANDER CEBA...
      </div>
    </div>
  );
};

export default Profile;
