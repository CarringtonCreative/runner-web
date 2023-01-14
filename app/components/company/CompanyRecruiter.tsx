import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import "./Company.css";

export interface CompanyRecruiterProps {
  primary?: boolean;
  title: string;
  alt: string;
  icon: StaticImageData;
  iconWidth: number;
  iconHeight: number;
  recruiters: string[];
}

const CompanyRecruiter = (props: CompanyRecruiterProps) => {
  const { alt, icon, iconWidth, iconHeight, title, recruiters } = props;
  return (
    <div className="company-recruiters-container">
      <h3 className="company-recruiters-title">{title}</h3>
      <ul>
        {recruiters.map((recruiter, index) => (
          <li key={index} className="company-recruiter">
            <Image src={icon} alt={alt} width={iconWidth} height={iconHeight} />
            <p className="company-recruiter-name">{recruiter}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyRecruiter;
