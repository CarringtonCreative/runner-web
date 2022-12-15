import { MetricProps } from "./Metric";
import HoursBookedIcon from "../../../public/sneakers.png";
import MoneyEarnedIcon from "../../../public/money-transfer.png";
import GigsCompletedIcon from "../../../public/gig-completed.png";
import ReviewsIcon from "../../../public/reviews.png";
import { MetricsSectionProps } from "./MetricsSection";
import { MetricsProps } from "./Metrics";

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
    icon: HoursBookedIcon,
    alt: "Hours Booked",
    title: "",
    metric: 648,
    label: "Hrs booked",
    iconWidth: 35,
    iconHeight: 35,
  },
  {
    primary: true,
    icon: MoneyEarnedIcon,
    alt: "Money Earned",
    title: "$",
    metric: 85098,
    label: "Earned",
    iconWidth: 35,
    iconHeight: 35,
  },
  {
    primary: true,
    icon: GigsCompletedIcon,
    alt: "Gigs Completed",
    title: "",
    metric: 32,
    label: "Gigs Completed",
    iconWidth: 35,
    iconHeight: 35,
  },
  {
    primary: true,
    icon: ReviewsIcon,
    alt: "Reviews",
    title: "",
    metric: 12,
    label: "Reviews",
    iconWidth: 35,
    iconHeight: 35,
  },
] as MetricProps[];

export const metricsData = { metrics } as MetricsProps;

export const metricSection = {
  title: "Roles + Skills",
  metrics,
} as MetricsSectionProps;
