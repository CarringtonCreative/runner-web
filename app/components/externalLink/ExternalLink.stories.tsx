import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ExternalLink from "./ExternalLink";
import { externalLink } from "./ExternalLinkData";

export default {
  title: "App/External Link",
  component: ExternalLink,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ExternalLink>;

const Template: ComponentStory<typeof ExternalLink> = (args) => (
  <ExternalLink {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  ...externalLink,
};
