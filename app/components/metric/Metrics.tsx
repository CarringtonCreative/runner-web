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

export interface MetricsProps {
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

const Metric = (props: MetricsProps) => {
  const { metrics } = props;
  return (
    <ul className="metrics-container">
      {metrics.map((metric, index) => (
        <li key={index}>{getMetric(metric)}</li>
      ))}
    </ul>
  );
};

export default Metric;
