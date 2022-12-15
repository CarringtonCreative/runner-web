import React from "react";
import "./menuTab.css";

interface MenuTabProps {
  selected?: boolean;
  size?: "small" | "medium" | "large";
  label: string;
  imageSrc: string;
  onClick?: () => void;
}

export const MenuTab = ({
  selected = false,
  size = "medium",
  label,
  imageSrc,
  ...props
}: MenuTabProps) => {
  const className = selected ? "contianer" : "";
  return <div className={className}></div>;
};
