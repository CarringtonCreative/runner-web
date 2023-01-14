import React from "react";
import "./Dashboard.css";
import DashboardMetrics, { DashboardMetricsProps } from "./DashboardMetrics";
import "./Dashboard.css";

export interface DashboardProps {
  primary?: boolean;
  data: DashboardMetricsProps;
}

const Dashboard = (props: DashboardProps) => {
  const { data } = props;
  return (
    <div className="dashboard-container">
      <div className="dashboard-left-aside-container">
        <DashboardMetrics metrics={data.metrics} />
      </div>
      <div className="dashboard-right-aside-container"></div>
    </div>
  );
};

export default Dashboard;
