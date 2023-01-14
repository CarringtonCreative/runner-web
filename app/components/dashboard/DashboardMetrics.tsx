import React from "react";
import "./Dashboard.css";
import DashboardMetric, { DashboardMetricProps } from "./DashboardMetric";

export interface DashboardMetricsProps {
  primary?: boolean;
  metrics: DashboardMetricProps[];
}

const DashboardMetrics = (props: DashboardMetricsProps) => {
  const { metrics } = props;
  return (
    <ul className="dashboard-metrics-container">
      {metrics.map((metric, index) => {
        return <li key={index}>{<DashboardMetric {...metric} />}</li>;
      })}
    </ul>
  );
};

export default DashboardMetrics;
