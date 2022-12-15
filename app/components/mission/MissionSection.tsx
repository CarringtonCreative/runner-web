import React from "react";
import "./MissionTag.css";

export interface MissionProps {
  primary?: boolean;
  label: string;
  color: string;
  backgroundColor: string;
}

export interface MissionSectionProps {
  title: string;
  tags: MissionProps[];
}

const getMissionTag = (tag: MissionProps) => {
  const { color, backgroundColor, label } = tag;
  return (
    <div className="mission-tag-container" style={{ backgroundColor }}>
      <p className="mission-tag-label" style={{ color }}>
        {label}
      </p>
    </div>
  );
};

const MissionSection = (props: MissionSectionProps) => {
  const { tags, title } = props;
  return (
    <div className="mission-section-container">
      <h3 className="mission-section-title">{title}</h3>
      <ul className="mission-tags-container">
        {tags.map((tag, index) => (
          <li key={index}>{getMissionTag(tag)}</li>
        ))}
      </ul>
    </div>
  );
};

export default MissionSection;
