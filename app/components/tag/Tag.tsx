import React from "react";
import "./Tag.css";

export interface TagProps {
  primary?: boolean;
  label: string;
  color: string;
  backgroundColor: string;
}

const Tag = (props: TagProps) => {
  const { label, color, backgroundColor } = props;
  return (
    <div className="tag-container" style={{ backgroundColor }}>
      <p className="tag-label" style={{ color }}>
        {label}
      </p>
    </div>
  );
};

export default Tag;
