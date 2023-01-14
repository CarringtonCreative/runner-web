import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dashboard from "./Dashboard";
import { dashboardData } from "./DashboardData";

export default {
  title: "Dashboard/Dashboard",
  component: Dashboard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Dashboard>;

const Template: ComponentStory<typeof Dashboard> = (args) => (
  <Dashboard {...args} />
);
export const Primary = Template.bind({});

Primary.args = { ...dashboardData };
