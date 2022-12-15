import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Social from "./Social";
import { social } from "./SocialsData";

export default {
  title: "App/Social",
  component: Social,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Social>;

const Template: ComponentStory<typeof Social> = (args) => <Social {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  ...social,
};
