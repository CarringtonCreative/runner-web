import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DashboardMetrics from "./DashboardMetrics";
import { metrics } from "./DashboardData";

export default {
  title: "Dashboard/Dashboard Metrics",
  component: DashboardMetrics,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof DashboardMetrics>;

const Template: ComponentStory<typeof DashboardMetrics> = (args) => (
  <DashboardMetrics {...args} />
);
export const Primary = Template.bind({});

Primary.args = {
  metrics,
};
