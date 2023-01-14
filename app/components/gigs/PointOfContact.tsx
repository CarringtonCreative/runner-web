import React from "react";
import Image, { StaticImageData } from "next/image";
import "./Gigs.css";

export interface PointOfContactProps {
  primary: true;
  title: string;
  alt: string;
  icon: StaticImageData;
  iconWidth: number;
  iconHeight: number;
  contact: string;
}

const PointOfContact = (props: PointOfContactProps) => {
  const { alt, icon, iconWidth, iconHeight, title, contact } = props;
  return (
    <div className="gig-poc-container">
      <h3 className="gig-poc-header">{title}</h3>
      <div className="gig-poc-person-container">
        <Image src={icon} alt={alt} width={iconWidth} height={iconHeight} />
        <p className="gig-poc">{contact}</p>
      </div>
    </div>
  );
};

export default PointOfContact;
