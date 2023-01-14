import { DashboardMetricProps } from "./DashboardMetric";
import { DashboardMetricsProps } from "./DashboardMetrics";

export const metric = {
  primary: true,
  title: "Gross Market Value",
  value: "$1,599,137",
} as DashboardMetricProps;

export const metrics = [
  {
    primary: true,
    title: "Gross Market Value",
    value: "$1,599,137",
  },
  {
    primary: true,
    title: "Total Runners",
    value: "731",
  },
  {
    primary: true,
    title: "Runner Utilization",
    value: "68%",
  },
  {
    primary: true,
    title: "Active Runners",
    value: "503",
  },
  {
    primary: true,
    title: "Total Matches",
    value: "988",
  },
  {
    primary: true,
    title: "Total Companies",
    value: "247",
  },
  {
    primary: true,
    title: "Active Companies",
    value: "33",
  },
  {
    primary: true,
    title: "Company Utilization",
    value: "13%",
  },
] as DashboardMetricProps[];

export const dashboardData = {
  primary: true,
  metrics,
} as DashboardMetricsProps;
