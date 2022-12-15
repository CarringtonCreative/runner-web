import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ExternalLink from "./ExternalLink";
import ExternalLinkIcon from "../../../public/external-link.png";

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
  label: "Sēkr",
  alt: "Google",
  url: "https://google.com",
  image: ExternalLinkIcon,
  imageWidth: 15,
  imageHeight: 15,
};
