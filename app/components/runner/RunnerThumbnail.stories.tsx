import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RunnerThumbnail from "./RunnerThumbnail";
import { messageButtonData } from "../messageButton/MessageButtonData";
import { metricsData } from "../metric/MetricData";
import { socials } from "../socials/SocialsData";
import { tagSection } from "../tag/TagData";
import { rating } from "../rating/RatingData";

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

Primary.args = {
  primary: true,
  title: "Lavendar Smith",
  rating: rating,
  tags: tagSection,
  metrics: metricsData,
  messageButton: messageButtonData,
  socials: socials,
};
