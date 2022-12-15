import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MetricsSection from "./MetricsSection";
import HoursBookedIcon from "../../../public/sneakers.png";
import MoneyEarnedIcon from "../../../public/money-transfer.png";
import GigsCompletedIcon from "../../../public/gig-completed.png";
import ReviewsIcon from "../../../public/reviews.png";

export default {
  title: "App/Metrics Section",
  component: MetricsSection,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof MetricsSection>;

const Template: ComponentStory<typeof MetricsSection> = (args) => (
  <MetricsSection {...args} />
);

export const Primary = Template.bind({});

const metrics = [
  {
    primary: true,
    imagePath: HoursBookedIcon,
    alt: "Hours Booked",
    title: "",
    metric: 648,
    label: "hrs booked",
    iconWidth: 25,
    iconHeight: 25,
  },
  {
    primary: true,
    imagePath: MoneyEarnedIcon,
    alt: "Money Earned",
    title: "$",
    metric: 85098,
    label: "earned",
    iconWidth: 25,
    iconHeight: 25,
  },
  {
    primary: true,
    imagePath: GigsCompletedIcon,
    alt: "Gigs Completed",
    title: "",
    metric: 32,
    label: "gigs completed",
    iconWidth: 25,
    iconHeight: 25,
  },
  {
    primary: true,
    imagePath: ReviewsIcon,
    alt: "Reviews",
    title: "",
    metric: 12,
    label: "reviews",
    iconWidth: 25,
    iconHeight: 25,
  },
];

Primary.args = {
  title: "Roles + Skills",
  metrics,
};
