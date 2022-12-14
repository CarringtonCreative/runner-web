import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tag from "./Tag";
import { tag } from "./TagData";

export default {
  title: "App/Tag",
  component: Tag,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  ...tag,
};
