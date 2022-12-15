import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RecruiterThumbnail from "./RecruiterThumbnail";
import { metricsData } from "../metric/MetricData";
import { messageButtonData } from "../messageButton/MessageButtonData";
import { rating } from "../rating/RatingData";
import { tagSection } from "../tag/TagData";
import { socials } from "../socials/SocialsData";

export default {
  title: "App/Recruiter Thumbnail",
  component: RecruiterThumbnail,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof RecruiterThumbnail>;

const Template: ComponentStory<typeof RecruiterThumbnail> = (args) => (
  <RecruiterThumbnail {...args} />
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
