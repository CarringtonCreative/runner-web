import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GigThumbnailRunner from "./GigThumbnailRunner";
import "./GigsData";
import { gigRecruiterMetrics } from "../metric/MetricData";
import { tagSection } from "../tag/TagData";
import { applyButtonData } from "../applyButton/ApplyButtonData";
import { description, gigCompanyData, pointOfContact } from "./GigsData";
import { socials } from "../socials/SocialsData";

export default {
  title: "Runner/Gig Thumbnail",
  component: GigThumbnailRunner,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof GigThumbnailRunner>;

const Template: ComponentStory<typeof GigThumbnailRunner> = (args) => (
  <GigThumbnailRunner {...args} />
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
