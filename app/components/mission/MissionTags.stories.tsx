import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MissionTags from "./MissionTags";
import { missionTags } from "./MissionData";

export default {
  title: "App/Mission Tags",
  component: MissionTags,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof MissionTags>;

const Template: ComponentStory<typeof MissionTags> = (args) => (
  <MissionTags {...args} />
);
export const Primary = Template.bind({});

Primary.args = {
  tags: missionTags,
};
