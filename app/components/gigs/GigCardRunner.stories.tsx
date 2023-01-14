import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GigCardRunner from "./GigCardRunner";
import "./GigsData";
import { gigRecruiterMetrics } from "../metric/MetricData";
import { tagSection } from "../tag/TagData";
import { applyButtonData } from "../applyButton/ApplyButtonData";
import { gigCompanyData, pointOfContact, description } from "./GigsData";
import { socials } from "../socials/SocialsData";

export default {
  title: "Runner/Gig Card",
  component: GigCardRunner,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof GigCardRunner>;

const Template: ComponentStory<typeof GigCardRunner> = (args) => (
  <GigCardRunner {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  description,
  tags: tagSection,
  metrics: gigRecruiterMetrics,
  apply: applyButtonData,
  pointOfContact: pointOfContact,
  gigCompany: gigCompanyData,
  socials,
};
