import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RunnerProfile from "./RunnerProfile";

import { metricsData } from "../metric/MetricData";
import { messageButtonData } from "../messageButton/MessageButtonData";
import { socials } from "../socials/SocialsData";
import { eventDataSection } from "../eventCard/EventData";
import { biography } from "../biography/BiographyData";
import { missionTagSection } from "../mission/MissionData";
import { tagSection } from "../tag/TagData";
import { rating } from "../rating/RatingData";

export default {
  title: "App/Runner Profile",
  component: RunnerProfile,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof RunnerProfile>;

const Template: ComponentStory<typeof RunnerProfile> = (args) => (
  <RunnerProfile {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  title: "Lavendar Smith",
  rating: rating,
  tags: tagSection,
  metrics: metricsData,
  messageButton: messageButtonData,
  missionSection: missionTagSection,
  biography: biography,
  events: eventDataSection,
  socials: socials,
};
