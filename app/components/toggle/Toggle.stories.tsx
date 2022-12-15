import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ToggleButton from "./Toggle";
import { toggle } from "./ToggleData";

export default {
  title: "App/Toggle Button",
  component: ToggleButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => (
  <ToggleButton {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  ...toggle,
};
