import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MessageButton from "./MessageButton";

export default {
  title: "App/Message Button",
  component: MessageButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof MessageButton>;

const Template: ComponentStory<typeof MessageButton> = (args) => (
  <MessageButton {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "Message",
  iconHeight: 20,
  iconWidth: 20,
  onClick: () => {
    console.log("Send a message");
  },
};
