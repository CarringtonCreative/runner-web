import React, { useState } from "react";
import Image from "next/image";
import LogoutButton from "../logout/LogoutButton";
import LogoutIcon from "../../../public/logout.png";
import Avatar from "../../../public/carrington.png";

import "./Menu.css";

const MenuFooter = (props: any) => {
  const handleLogoutClick = () => {
    console.log("Logout clicked");
  };

  const getUserAvatar = () => {
    return (
      <Image
        style={{ borderRadius: "6rem" }}
        src={Avatar}
        alt="Avatar"
        width={100}
        height={100}
      />
    );
  };

  return (
    <div className="menu-footer-container">
      {getUserAvatar()}
      <h3 className="menu-footer-title">Carrington Dennis</h3>
      <p className="menu-footer-text">Engineer</p>
      <p className="menu-footer-text">🦄</p>
      <LogoutButton
        alt={"Logout Button"}
        label="Logout"
        image={LogoutIcon}
        imageHeight={25}
        imageWidth={25}
        onClick={handleLogoutClick}
      />
    </div>
  );
};

export default MenuFooter;
