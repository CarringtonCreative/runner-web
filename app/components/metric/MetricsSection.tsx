import React from "react";
import Image, { StaticImageData } from "next/image";
import Metric, { MetricProps } from "./Metric";
import "./Metric.css";
export interface MetricsSectionProps {
  title: string;
  metrics: MetricProps[];
}

const MetricSection = (props: MetricsSectionProps) => {
  const { title, metrics } = props;
  return (
    <div>
      <h3 className="metrics-section-title">{title}</h3>
      <ul className="metrics-container">
        {metrics.map((metric, index) => (
          <li key={index}>{<Metric {...metric} />}</li>
        ))}
      </ul>
    </div>
  );
};

export default MetricSection;
