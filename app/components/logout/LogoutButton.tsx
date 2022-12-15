import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import LogoutIcon from "../../../public/logout.png";
import "./LogoutButton.css";

export interface LogoutButtonProps {
  image: StaticImageData;
  imageWidth: number;
  imageHeight: number;
  label: string;
}

const LogoutButton = (props: LogoutButtonProps) => {
  return (
    <div className="logout-button-container" onClick={() => {}}>
      <h3 className="logout-button-label">Logout</h3>
      <Image src={LogoutIcon} alt="Dashboard" width={25} height={25} />
    </div>
  );
};

export default LogoutButton;
