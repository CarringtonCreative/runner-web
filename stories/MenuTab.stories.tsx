import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MenuTab } from "./MenuTab";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/MenuTab",
  component: MenuTab,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof MenuTab>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MenuTab> = (args) => (
  <MenuTab {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  selected: true,
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
