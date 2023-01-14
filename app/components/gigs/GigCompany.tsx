import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import "./Gigs.css";

export interface GigCompanyProps {
  primary: true;
  name: string;
  url: string;
  alt: string;
  icon: StaticImageData;
  iconWidth: number;
  iconHeight: number;
}

const GigCompanyLink = (url: string) => {
  return (
    <Link href={url} className="gig-company-url">
      www
    </Link>
  );
};

const GigCompany = (props: GigCompanyProps) => {
  const { alt, icon, iconWidth, iconHeight, name } = props;
  return (
    <div className="gig-company-container">
      <Image src={icon} alt={alt} width={iconWidth} height={iconHeight} />
      <h3 className="gig-company-name">{name}</h3>
    </div>
  );
};

export default GigCompany;
