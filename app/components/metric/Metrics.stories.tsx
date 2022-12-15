import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Metrics from "./Metrics";
import HoursBookedIcon from "../../../public/sneakers.png";
import MoneyEarnedIcon from "../../../public/money-transfer.png";
import GigsCompletedIcon from "../../../public/gig-completed.png";
import ReviewsIcon from "../../../public/reviews.png";

export default {
  title: "App/Metrics",
  component: Metrics,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Metrics>;

const Template: ComponentStory<typeof Metrics> = (args) => (
  <Metrics {...args} />
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
  metrics,
};
