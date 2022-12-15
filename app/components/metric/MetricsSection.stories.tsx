import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MetricsSection from "./MetricsSection";
import { metrics } from "./MetricData";

export default {
  title: "App/Metrics Section",
  component: MetricsSection,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof MetricsSection>;

const Template: ComponentStory<typeof MetricsSection> = (args) => (
  <MetricsSection {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  title: "Roles + Skills",
  metrics,
};
