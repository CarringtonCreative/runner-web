import React from "react";
import "./Dashboard.css";

export interface DashboardMetricProps {
  primary?: boolean;
  title: string;
  value: string;
}

const DashboardMetric = (props: DashboardMetricProps) => {
  const { title, value } = props;
  return (
    <div className="dashboard-metric-container">
      <h3 className="dashboard-metric-title">{title}</h3>
      <p className="dashboard-metric-value">{value}</p>
    </div>
  );
};

export default DashboardMetric;
