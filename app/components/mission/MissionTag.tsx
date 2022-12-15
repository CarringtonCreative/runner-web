import React from "react";
import "./MissionTag.css";

export interface TagProps {
  primary?: boolean;
  label: string;
  color: string;
  backgroundColor: string;
}

const MissionTag = (props: TagProps) => {
  const { label, color, backgroundColor } = props;
  return (
    <div className="mission-tag-container" style={{ backgroundColor }}>
      <p className="mission-tag-label" style={{ color }}>
        {label}
      </p>
    </div>
  );
};

export default MissionTag;
