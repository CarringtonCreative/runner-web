import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Metric from "./Metric";
import Icon from "../../../public/sneakers.png";

export default {
  title: "App/Metric",
  component: Metric,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Metric>;

const Template: ComponentStory<typeof Metric> = (args) => <Metric {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  imagePath: Icon,
  alt: "Hours Booked",
  title: "",
  metric: 0,
  label: "hrs booked",
  iconWidth: 25,
  iconHeight: 25,
};
