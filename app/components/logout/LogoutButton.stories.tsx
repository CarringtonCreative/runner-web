import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LogoutButton from "./LogoutButton";
import { logoutButtonData } from "./LogoutButtonData";

export default {
  title: "App/Logout Button",
  component: LogoutButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LogoutButton>;

const Template: ComponentStory<typeof LogoutButton> = (args) => (
  <LogoutButton {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  ...logoutButtonData,
};
