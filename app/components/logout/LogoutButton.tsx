import React, { MouseEventHandler } from "react";
import Image, { StaticImageData } from "next/image";
import "./LogoutButton.css";

export interface LogoutButtonProps {
  alt: string;
  image: StaticImageData;
  imageWidth: number;
  imageHeight: number;
  label: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const LogoutButton = (props: LogoutButtonProps) => {
  const { alt, label, image, imageWidth, imageHeight, onClick } = props;
  return (
    <div className="logout-button-container" onClick={onClick}>
      <h3 className="logout-button-label">{label}</h3>
      <Image src={image} alt={alt} width={imageWidth} height={imageHeight} />
    </div>
  );
};

export default LogoutButton;
