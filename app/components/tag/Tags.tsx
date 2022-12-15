import React from "react";
import "./Tag.css";

export interface TagProps {
  primary?: boolean;
  label: string;
  color: string;
  backgroundColor: string;
}

export interface TagsProps {
  tags: TagProps[];
  title: string;
}

const getTag = (tag: TagProps) => {
  const { color, backgroundColor, label } = tag;
  return (
    <div className="tag-container" style={{ backgroundColor }}>
      <p className="tag-label" style={{ color }}>
        {label}
      </p>
    </div>
  );
};

const Tags = (props: TagsProps) => {
  const { tags, title } = props;
  return (
    <div className="tags-section-container">
      <h3 className="tags-title">{title}</h3>
      <ul className="tags-container">
        {tags.map((tag, index) => (
          <li key={index}>{getTag(tag)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
