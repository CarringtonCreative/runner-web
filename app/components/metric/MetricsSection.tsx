import React from "react";
import Image, { StaticImageData } from "next/image";
import "./Metric.css";

export interface MetricProps {
  primary?: boolean;
  alt: string;
  imagePath: StaticImageData;
  title: string;
  metric: number;
  label: string;
  iconWidth: number;
  iconHeight: number;
}

export interface MetricsSectionProps {
  title: string;
  metrics: MetricProps[];
}

const renderIcon = (
  imagePath: StaticImageData,
  alt: string,
  width: number,
  height: number
) => {
  return <Image src={imagePath} alt={alt} width={width} height={height} />;
};

const getMetric = (data: MetricProps) => {
  const { alt, imagePath, title, metric, label, iconWidth, iconHeight } = data;
  return (
    <div className="metric-container">
      {renderIcon(imagePath, alt, iconWidth, iconHeight)}
      <p className="metric-content">
        {title}
        <span className="metric">{metric}</span> {label}
      </p>
    </div>
  );
};

const MetricSection = (props: MetricsSectionProps) => {
  const { title, metrics } = props;
  return (
    <div>
      <h3 className="metrics-section-title">{title}</h3>
      <ul className="metrics-container">
        {metrics.map((metric, index) => (
          <li key={index}>{getMetric(metric)}</li>
        ))}
      </ul>
    </div>
  );
};

export default MetricSection;
