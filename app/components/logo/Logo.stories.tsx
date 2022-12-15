import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Logo } from "./Logo";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "App/Runner Logo",
  component: Logo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Logo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Runner",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Runner",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Runner",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Runner",
};
