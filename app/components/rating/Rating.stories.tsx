import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Rating from "./Rating";

export default {
  title: "App/Rating",
  component: Rating,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  active: false,
  rating: 4,
  ratings: 0,
  iconWidth: 20,
  iconHeight: 20,
  onClick: () => {
    console.log("Create rating");
  },
};
