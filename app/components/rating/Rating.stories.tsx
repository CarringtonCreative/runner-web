import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Rating from "./Rating";
import { rating } from "./RatingData";

export default {
  title: "App/Rating",
  component: Rating,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const Primary = Template.bind({});

Primary.args = { ...rating };
