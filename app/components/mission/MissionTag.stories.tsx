import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MissionTag from "./MissionTag";
import { missionTag } from "./MissionData";

export default {
  title: "App/Mission Tag",
  component: MissionTag,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof MissionTag>;

const Template: ComponentStory<typeof MissionTag> = (args) => (
  <MissionTag {...args} />
);

export const Primary = Template.bind({});

Primary.args = { ...missionTag };
