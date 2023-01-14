import { MetricProps } from "./Metric";
import RunnerIcon from "../../../public/runners.png";
import MoneyEarnedIcon from "../../../public/money-transfer.png";
import HoursBookedIcon from "../../../public/availability.png";
import GigsIcon from "../../../public/gig-contract.png";
import CalendarIcon from "../../../public/calendar.png";
import { MetricsSectionProps } from "./MetricsSection";
import { MetricsProps } from "./Metrics";
import moment from "moment";

export const metric = {
  icon: HoursBookedIcon,
  alt: "Hours Booked",
  title: "",
  metric: 0,
  label: "Hrs Booked",
  iconWidth: 35,
  iconHeight: 35,
} as MetricProps;

export const metrics = [
  {
    primary: true,
    icon: RunnerIcon,
    alt: "Runners",
    title: "",
    metric: 8,
    label: "Runners",
    iconWidth: 35,
    iconHeight: 35,
  },
  {
    primary: true,
    icon: HoursBookedIcon,
    alt: "Hrs Booked",
    title: "",
    metric: 981,
    label: "Hrs Booked",
    iconWidth: 35,
    iconHeight: 35,
  },
  {
    primary: true,
    icon: GigsIcon,
    alt: "Gigs",
    title: "",
    metric: 17,
    label: "Gigs",
    iconWidth: 35,
    iconHeight: 35,
  },
  {
    primary: true,
    icon: MoneyEarnedIcon,
    alt: "Money Earned",
    title: "$",
    metric: 297364,
    label: "Earned",
    iconWidth: 35,
    iconHeight: 35,
  },
] as MetricProps[];

export const gigRecruiterMetrics = [
  {
    primary: true,
    icon: MoneyEarnedIcon,
    alt: "Payout",
    title: "$",
    metric: 65,
    label: "Hourly Rate",
    iconWidth: 30,
    iconHeight: 30,
  },
  {
    primary: true,
    icon: HoursBookedIcon,
    alt: "Time Commitment",
    title: "",
    metric: 30,
    label: "Hours Per Week",
    iconWidth: 30,
    iconHeight: 30,
  },
  {
    primary: true,
    icon: CalendarIcon,
    alt: "Start Date",
    title: "",
    metric: moment().add(30, "days").calendar(),
    label: "Start Date",
    iconWidth: 30,
    iconHeight: 30,
  },
  {
    primary: true,
    icon: CalendarIcon,
    alt: "End Date",
    title: "",
    metric: moment().add(180, "days").calendar(),
    label: "End Date",
    iconWidth: 30,
    iconHeight: 30,
  },
] as MetricProps[];

export const metricsData = { metrics } as MetricsProps;

export const metricSection = {
  title: "Roles + Skills",
  metrics,
} as MetricsSectionProps;
