import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CompanyProfile from "./CompanyProfile";

import { metricSection } from "../metric/MetricData";
import { missionTagSection } from "../mission/MissionData";
import { companyRolesTags } from "../tag/TagData";
import { socials } from "../socials/SocialsData";
import { biography } from "../biography/BiographyData";
import { messageButtonData } from "../messageButton/MessageButtonData";
import { eventDataSection } from "../eventCard/EventData";
import { externalLink } from "../externalLink/ExternalLinkData";
import { companyRecruiters } from "./CompanyData";

export default {
  title: "App/Company Profile",
  component: CompanyProfile,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CompanyProfile>;

const Template: ComponentStory<typeof CompanyProfile> = (args) => (
  <CompanyProfile {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  companyName: "Sēkr",
  companyUrl: "https://sekr.com",
  tags: companyRolesTags,
  metrics: metricSection,
  messageButton: messageButtonData,
  missionSection: missionTagSection,
  biography,
  events: eventDataSection,
  socials: socials,
  recruiters: companyRecruiters,
};
