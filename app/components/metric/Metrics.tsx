import React from "react";
import { MetricProps } from "./Metric";
import "./Metric.css";
import Metric from "./Metric";
export interface MetricsProps {
  metrics: MetricProps[];
}

const Metrics = (props: MetricsProps) => {
  const { metrics } = props;
  return (
    <ul className="metrics-container">
      {metrics.map((metric, index) => (
        <li key={index}>{<Metric {...metric} />}</li>
      ))}
    </ul>
  );
};

export default Metrics;
