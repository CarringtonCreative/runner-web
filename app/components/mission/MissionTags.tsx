import React from "react";
import "./MissionTag.css";

export interface TagProps {
  primary?: boolean;
  label: string;
  color: string;
  backgroundColor: string;
}

export interface TagsProps {
  tags: TagProps[];
}

const getTag = (tag: TagProps) => {
  const { color, backgroundColor, label } = tag;
  return (
    <div className="mission-tag-container" style={{ backgroundColor }}>
      <p className="mission-tag-label" style={{ color }}>
        {label}
      </p>
    </div>
  );
};

const MissionTags = (props: TagsProps) => {
  const { tags } = props;
  return (
    <ul className="mission-tags-container">
      {tags.map((tag, index) => (
        <li key={index}>{getTag(tag)}</li>
      ))}
    </ul>
  );
};

export default MissionTags;
