import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DashboardMetrics from "./DashboardMetrics";
import { metrics } from "./DashboardData";
import DashboardFeed from "./DashboardFeed";
import { eventsData } from "../eventCard/EventData";

export default {
  title: "Dashboard/Dashboard Feed",
  component: DashboardFeed,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof DashboardFeed>;

const Template: ComponentStory<typeof DashboardFeed> = (args) => (
  <DashboardFeed {...args} />
);
export const Primary = Template.bind({});

Primary.args = {
  data: undefined,
};
