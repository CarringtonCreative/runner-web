import React from "react";
import Social, { SocialProps } from "./Social";
import "./Social.css";

export interface SocialsProps {
  primary?: boolean;
  socials: SocialProps[];
}

const Socials = (props: SocialsProps) => {
  const { socials } = props;
  return (
    <ul className="socials-container">
      {socials.map((social, index) => (
        <li key={index}>{<Social {...social} />}</li>
      ))}
    </ul>
  );
};

export default Socials;
