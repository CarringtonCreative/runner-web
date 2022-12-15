import React from "react";
import "./Biography.css";

export interface BiographyProps {
  primary?: boolean;
  title: string;
  description: string;
}

const Biography = (props: BiographyProps) => {
  const { title, description } = props;
  return (
    <div className="biography-container">
      <h3 className="biography-title">{title}</h3>
      <p className="biography-description">{description}</p>
    </div>
  );
};

export default Biography;
