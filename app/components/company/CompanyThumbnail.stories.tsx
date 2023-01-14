import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CompanyThumbnail from "./CompanyThumbnail";
import { metricsData } from "../metric/MetricData";
import { messageButtonData } from "../messageButton/MessageButtonData";
import { companyRolesTags } from "../tag/TagData";
import { socials } from "../socials/SocialsData";
import { companyRecruiters } from "./CompanyData";

export default {
  title: "App/Company Thumbnail",
  component: CompanyThumbnail,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CompanyThumbnail>;

const Template: ComponentStory<typeof CompanyThumbnail> = (args) => (
  <CompanyThumbnail {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  title: "Breanne Acio",
  companyName: "Sēkr",
  companyUrl: "https://sekr.com",
  tags: companyRolesTags,
  metrics: metricsData,
  messageButton: messageButtonData,
  socials: socials,
  recruiters: companyRecruiters,
};
