import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DashboardMetric from "./DashboardMetric";

export default {
  title: "Dashboard/Dashboard Metric",
  component: DashboardMetric,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof DashboardMetric>;

const Template: ComponentStory<typeof DashboardMetric> = (args) => (
  <DashboardMetric {...args} />
);
export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  title: "Gross Market Value",
  value: "$1,599,137",
};
