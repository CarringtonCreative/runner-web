import React from "react";
import Image, { StaticImageData } from "next/image";
import "./Metric.css";

export interface MetricProps {
  primary?: boolean;
  alt: string;
  title?: string;
  label: string;
  metric: number | string;
  icon: StaticImageData;
  iconWidth?: number;
  iconHeight?: number;
}

const renderIcon = (
  icon: StaticImageData,
  alt: string,
  width: number,
  height: number
) => {
  return <Image src={icon} alt={alt} width={width} height={height} />;
};

const Metric = (props: MetricProps) => {
  const {
    alt,
    icon,
    title,
    metric,
    label,
    iconWidth = 35,
    iconHeight = 35,
  } = props;
  return (
    <div className="metric-container">
      {renderIcon(icon, alt, iconWidth, iconHeight)}
      <div className="metric-content">
        <p className="metric-label">{label}</p>
        <p className="metric">
          {title}
          {metric}
        </p>
      </div>
    </div>
  );
};

export default Metric;
