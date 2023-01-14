import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ApplyButton from "./ApplyButton";

export default {
  title: "App/Apply Button",
  component: ApplyButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ApplyButton>;

const Template: ComponentStory<typeof ApplyButton> = (args) => (
  <ApplyButton {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "Apply",
  iconHeight: 20,
  iconWidth: 20,
  onClick: () => {
    console.log("Send a apply");
  },
};
