import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CompanyLink from "./GigCompany";
import { gigCompanyData } from "./GigsData";

export default {
  title: "Runner/Gig Company",
  component: CompanyLink,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CompanyLink>;

const Template: ComponentStory<typeof CompanyLink> = (args) => (
  <CompanyLink {...args} />
);

export const Primary = Template.bind({});

Primary.args = { ...gigCompanyData };
