import React from "react";
import "./MissionTag.css";

export interface MissionTagProps {
  primary?: boolean;
  label: string;
  color: string;
  backgroundColor: string;
}

const MissionTag = (props: MissionTagProps) => {
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
