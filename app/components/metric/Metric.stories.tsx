import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Metric from "./Metric";
import { metric } from "./MetricData";

export default {
  title: "App/Metric",
  component: Metric,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Metric>;

const Template: ComponentStory<typeof Metric> = (args) => <Metric {...args} />;

export const Primary = Template.bind({});
Primary.args = { ...metric };
