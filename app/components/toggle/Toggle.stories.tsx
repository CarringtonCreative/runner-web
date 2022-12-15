import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ToggleButton from "./Toggle";

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
  primary: true,
  inactiveLabel: "Deactivated",
  activeLabel: "Activated",
  toggled: false,
  onClick: () => {
    console.log("Toggled");
  },
};
