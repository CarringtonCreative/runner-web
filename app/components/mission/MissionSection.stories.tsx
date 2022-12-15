import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MissionSection from "./MissionSection";
import { missionTagSection } from "./MissionData";

export default {
  title: "App/Mission Section",
  component: MissionSection,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof MissionSection>;

const Template: ComponentStory<typeof MissionSection> = (args) => (
  <MissionSection {...args} />
);
export const Primary = Template.bind({});

Primary.args = { ...missionTagSection };
