import React from "react";
import "./ApplyButton.css";
import Image from "next/image";
import ApplyIcon from "../../../public/apply.png";

export interface ApplyButtonProps {
  primary?: boolean;
  label: string;
  alt: string;
  iconWidth: number;
  iconHeight: number;
  onClick?: Function;
}

const handleClick = () => {
  console.log("Send a apply");
};

const ApplyButton = (props: ApplyButtonProps) => {
  const { label, alt, iconWidth, iconHeight } = props;
  return (
    <button className="apply-button-container" onClick={handleClick}>
      {label}
      <Image src={ApplyIcon} alt={alt} width={iconWidth} height={iconHeight} />
    </button>
  );
};

export default ApplyButton;
