import React from "react";
import "./MissionTag.css";
import MissionTag, { MissionTagProps } from "./MissionTag";

export interface MissionSectionProps {
  title: string;
  tags: MissionTagProps[];
}

const MissionSection = (props: MissionSectionProps) => {
  const { tags, title } = props;
  return (
    <div className="mission-section-container">
      <h3 className="mission-section-title">{title}</h3>
      <ul className="mission-tags-container">
        {tags.map((tag, index) => (
          <li key={index}>{<MissionTag {...tag} />}</li>
        ))}
      </ul>
    </div>
  );
};

export default MissionSection;
