import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Metrics from "./Metrics";
import { metrics } from "./MetricData";

export default {
  title: "App/Metrics",
  component: Metrics,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Metrics>;

const Template: ComponentStory<typeof Metrics> = (args) => (
  <Metrics {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  metrics,
};
