import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RecruiterProfile from "./RecruiterProfile";

import { metricSection } from "../metric/MetricData";
import { missionTagSection } from "../mission/MissionData";
import { rating } from "../rating/RatingData";
import { tagSection } from "../tag/TagData";
import { socials } from "../socials/SocialsData";
import { biography } from "../biography/BiographyData";
import { messageButtonData } from "../messageButton/MessageButtonData";
import { eventDataSection, eventsData } from "../eventCard/EventData";

export default {
  title: "App/Recruiter Profile",
  component: RecruiterProfile,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof RecruiterProfile>;

const Template: ComponentStory<typeof RecruiterProfile> = (args) => (
  <RecruiterProfile {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  title: "Lavendar Smith",
  rating,
  tags: tagSection,
  metrics: metricSection,
  messageButton: messageButtonData,
  missionSection: missionTagSection,
  biography,
  events: eventDataSection,
  socials: socials,
};
