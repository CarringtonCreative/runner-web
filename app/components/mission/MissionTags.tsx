import React from "react";
import MissionTag, { MissionTagProps } from "./MissionTag";
import "./MissionTag.css";

export interface TagsProps {
  tags: MissionTagProps[];
}

const MissionTags = (props: TagsProps) => {
  const { tags } = props;
  return (
    <ul className="mission-tags-container">
      {tags.map((tag, index) => (
        <li key={index}>{<MissionTag {...tag} />}</li>
      ))}
    </ul>
  );
};

export default MissionTags;
