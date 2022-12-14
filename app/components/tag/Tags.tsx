import React from "react";
import Tag, { TagProps } from "./Tag";
import "./Tag.css";

export interface TagsProps {
  tags: TagProps[];
  title: string;
}

const Tags = (props: TagsProps) => {
  const { tags, title } = props;
  return (
    <div className="tags-section-container">
      <h3 className="tags-title">{title}</h3>
      <ul className="tags-container">
        {tags.map((tag, index) => (
          <li key={index}>{<Tag {...tag} />}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
