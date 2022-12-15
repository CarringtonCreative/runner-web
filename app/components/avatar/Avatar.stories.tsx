import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Avatar from "./Avatar";
import { avatar } from "./AvatarData";

export default {
  title: "App/Avatar",
  component: Avatar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  ...avatar,
};
