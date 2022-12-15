import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Socials from "./Socials";
import { socials } from "./SocialsData";

export default {
  title: "App/Socials",
  component: Socials,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Socials>;

const Template: ComponentStory<typeof Socials> = (args) => (
  <Socials {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  ...socials,
};
