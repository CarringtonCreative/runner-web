import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MessageButtonProps } from "../messageButton/MessageButton";
import { TagsProps } from "../tag/Tags";
import { MetricsProps } from "../metric/Metrics";

import RunnerThumbnail from "./RunnerThumbnail";
import HoursBookedIcon from "../../../public/sneakers.png";
import MoneyEarnedIcon from "../../../public/money-transfer.png";
import GigsCompletedIcon from "../../../public/gig-completed.png";
import ReviewsIcon from "../../../public/reviews.png";

export default {
  title: "App/Runner Thumbnail",
  component: RunnerThumbnail,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof RunnerThumbnail>;

const Template: ComponentStory<typeof RunnerThumbnail> = (args) => (
  <RunnerThumbnail {...args} />
);

export const Primary = Template.bind({});

const rating = {
  active: false,
  rating: 4,
  ratings: 0,
  iconWidth: 20,
  iconHeight: 20,
  onClick: () => {
    console.log("Create rating");
  },
};

const tags = {
  title: "Roles + Skills",
  tags: [
    {
      primary: true,
      label: "Operations",
      color: "#fff",
      backgroundColor: "#D64933",
    },
    {
      primary: true,
      label: "Product Manager",
      color: "#fff",
      backgroundColor: "#FF7777",
    },
    {
      primary: true,
      label: "Project Manager",
      color: "#fff",
      backgroundColor: "#FF7777",
    },
    {
      primary: true,
      label: "Tech Savy",
      color: "#fff",
      backgroundColor: "#FF7777",
    },
    {
      primary: true,
      label: "Risk Management Focused",
      color: "#fff",
      backgroundColor: "#FF7777",
    },
    {
      primary: true,
      label: "Marketing",
      color: "#fff",
      backgroundColor: "#FF7777",
    },
  ],
} as TagsProps;

const metrics = {
  metrics: [
    {
      primary: true,
      imagePath: HoursBookedIcon,
      alt: "",
      title: "",
      metric: 648,
      label: "hrs booked",
      iconWidth: 25,
      iconHeight: 25,
    },
    {
      primary: true,
      imagePath: MoneyEarnedIcon,
      alt: "",
      title: "$",
      metric: 85098,
      label: "earned",
      iconWidth: 25,
      iconHeight: 25,
    },
    {
      primary: true,
      imagePath: GigsCompletedIcon,
      alt: "",
      title: "",
      metric: 32,
      label: "gigs completed",
      iconWidth: 25,
      iconHeight: 25,
    },
    {
      primary: true,
      imagePath: ReviewsIcon,
      alt: "",
      title: "",
      metric: 12,
      label: "reviews",
      iconWidth: 25,
      iconHeight: 25,
    },
  ],
} as MetricsProps;

const messageButton = {
  primary: true,
  alt: "",
  label: "Message",
  iconHeight: 20,
  iconWidth: 20,
  onClick: () => {
    console.log("Send a message");
  },
} as MessageButtonProps;

Primary.args = {
  primary: true,
  title: "Lavendar Smith",
  rating,
  tags,
  metrics,
  messageButton,
};
