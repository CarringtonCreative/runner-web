import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LogoutButton from "./LogoutButton";
import LogoutIcon from "../../../public/logout.png";

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
  label: "Message",
  image: LogoutIcon,
  imageWidth: 20,
  imageHeight: 20,
};
